const request = require('request')
const fs = require('fs')

const options = {
    method: "POST",
    url: "https://api.anonymousfiles.io/",
    port: 443,
    headers: {
        "Content-Type": "application/json"
    },
    formData : {
        "file" : fs.createReadStream("./package.json")
    }
};

request(options, function (err, res, body) {
    if(err) console.log(err)
    let JSONBody = JSON.parse(body)
    console.log('URL: ' + JSONBody.url);
});