const LocalStrategy = require('passport-local').Strategy;

const {users} = require('../../models');

module.exports = new LocalStrategy({
        usernameField : 'uid',
        passwordField : 'password',
        passReqToCallback : true
    }
    ,function(req, userid, password, done) {
      if(!userid || !password) return done(null, false);

      users.findOne({
        where: {uid: userid},
        raw: true
      }).then( result => {
        if(!result){ done(null, false)}
        else{
          if(result.password == password){
            done(null, {
              uid: result['uid'],
              id: result['id'],
              status: result['status']
            });
          }else{
            done(null, false)
          }
        }
      });
    }
);
