const JwtStrategy = require("../node_modules/passport-jwt/lib").Strategy,
ExtractJwt = require("../node_modules/passport-jwt/lib").ExtractJwt;
const keys = require("./keys");

// load up the user model
const User = require('../models').User;

module.exports = function (passport) {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("JWT"),
    secretOrKey: keys.secretOrKey
  };
  passport.use(
    "jwt",
    new JwtStrategy(opts, function (jwt_payload, done) {
      User.findByPk(jwt_payload.id)
        .then((user) => {
          return done(null, user);
        })
        .catch((error) => {
          return done(error, false);
        });
    })
  );
};
