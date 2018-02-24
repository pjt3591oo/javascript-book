const express = require('express');
const path = require('path');
const fs = require('fs');

const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('./passportmiddleware');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
    secret: 'asdfafdsafasdfasdf',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 3// 1000 * 60 * 60 = 1시간 * 24 = 하루 * 3 = 3일
    }
})); // 세션 설정

app.use(passport.initialize()); // passport 구동
app.use(passport.session()); // 세션 연결

app.use(express.static(path.join(__dirname, 'html')));

app.get('/', (req, res) => {
    fs.readFile('login.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    })
})

app.get('/failur', (req, res) => {
    console.log(req.user)
    res.send('failer')
})

app.get('/success', (req, res, next)=> {
    if(req.user)next();
    else res.redirect('/')
}, (req, res) => {
    console.log(req.user)
    res.send('success')
})

app.post('/login', passport.authenticate('local', {
    failureRedirect: '/failur',
    successRedirect: '/success'
}));

app.get('/fblogin/facebook', passport.authenticate('facebook'));
app.get('/fblogin/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: '/failur',
    successRedirect: '/success'
}));

app.post('/logout', (req, res) => {
    req.logout()
    res.send('<h1>로그아웃 완료</h1>')
});

app.listen(3000, () => {
  console.log('Server on 3000 Port');
});
