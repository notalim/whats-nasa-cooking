const { Router } = require("express");
const router = Router();
const { dbConnection } = require("../../server/mongoConnection");

// Route to register a new user
router.route("/register").post(async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res
                .status(400)
                .json({ message: "Both username and password are required" });
        }

        const db = await dbConnection();
        const usersCollection = db.collection("users");

        const existingUser = await usersCollection.findOne({ username });
        if (existingUser) {
            return res
                .status(400)
                .json({ message: "Username is already taken" });
        }

        const newUser = await usersCollection.insertOne({ username, password });
        res.status(201).json({
            message:
                "Signed up successfully. Now Log in using this information",
            // user: {
            //     _id: newUser.ops[0]._id,
            //     username: newUser.ops[0].username,
            // },
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

// Route to login a user
router.route("/login").post(async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res
                .status(400)
                .json({ message: "Both username and password are required" });
        }

        const db = await dbConnection();
        const usersCollection = db.collection("users");

        const user = await usersCollection.findOne({ username, password });
        if (!user) {
            return res
                .status(401)
                .json({ message: "Invalid username or password" });
        }

        // const userToSend = {
        //     _id: user._id,
        //     username: user.username,
        //     // Add any other properties you want to send, but exclude the password
        // };

        // console.log("User to send:", userToSend);

        res.status(200).json({
            message: "Logged in successfully",
            user: {
                _id: user._id,
                username: user.username,
            },
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
