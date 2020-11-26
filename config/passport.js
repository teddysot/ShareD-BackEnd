const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const db = require("../models");

const option = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY
};

const jwtStrategy = new Strategy(option, async (payload, done) => {
  const targetUser = await db.User.findOne({ where: { id: payload.id } });

  if (targetUser && targetUser.isConfirmed) {
    done(null, targetUser);
  } else {
    done(null, false);
  }
});

passport.use("jwt-auth", jwtStrategy);