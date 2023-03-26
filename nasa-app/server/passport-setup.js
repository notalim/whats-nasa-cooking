const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// TODO

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
        (accessToken, refreshToken, profile, done) => {
            console.log("Google profile: ", profile);
            // Here, you can save the user profile to your database
            done(null, profile);
        }
    )
);
