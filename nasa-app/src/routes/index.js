const userRoutes = require("./users");

const constructorMethod = (app) => {
    app.use("/users", userRoutes);

    app.use("*", (req, res) => {
        res.status(404).json({ error: "Route Not found" });
    });
};

module.exports = constructorMethod;
