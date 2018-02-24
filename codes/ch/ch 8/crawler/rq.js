const request = require("request");

let url = 'https://pjt3591oo.github.io/'

request({
    uri: url,
    method: "POST",
    timeout: 10000,
    followRedirect: true,
    form: {
        data: "value"
    }
}, (err, res, body) => {
    console.log(res);
} );
