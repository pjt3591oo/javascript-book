const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(new LocalStrategy({
        usernameField: 'id',
        passwordField: 'password',
        session: true, // 세션에 저장 여부
        passReqToCallback: true,
    }, (req, id, password, done) => {
        console.log(id, password)
        if(id == password){
            done(null, {id: id, name: ''})
        }else{
            done(null, false)
        }
}))

passport.use(new FacebookStrategy({
        clientID: '페이스북에 관리자 페이지에서 클라이언트 아이디 입력',
        clientSecret: '페이스북 관리자 페이지에서 클라이언트 시크릿 키 입력',
        callbackURL: "http://localhost:3000/fblogin/facebook/callback"
    }, (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        done(null,profile);
    }
));

module.exports = passport
