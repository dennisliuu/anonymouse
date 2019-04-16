var querystring = require('querystring');
var request = require('request');

var data = {
    'to': 'dennisliuu@gmail.com',
    'subject': 'testjs',
    'text': 'test'
}

var formData = querystring.stringify(data);
var contentLength = formData.length;

request({
    headers: {
        'Content-Length': contentLength,
        'Host': 'anonymouse.org',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate',
        'Referer': 'http://anonymouse.org/anonemail.html',
        'Connection': 'close',
        'Upgrade-Insecure-Requests': '1',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    uri: 'http://anonymouse.org/cgi-bin/anon-email.cgi',
    body: formData,
    method: 'POST'
}, (err, res, body) => {
    if (err) throw err
    else if (body.includes("The e-mail has been sent"))
        console.log('[+] Email Sent!\n[+] In order to increase your privacy, the anonymous e-mail will be randomly delayed up to 12 hours')
});