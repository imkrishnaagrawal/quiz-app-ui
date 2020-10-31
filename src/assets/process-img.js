'use strict';
const jsdom = require("jsdom");
var fs = require('fs'),
    request = require('request');

var download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};


const dom = new jsdom.JSDOM('<html></html>');
const document = dom.window.document;

const data = [];
for (let i = 1; i <= 6; i++) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    data.push(require(`./set (${i}).json`))
}
function parseHtmlString(yourHtmlString) {
    var element = document.createElement('div');
    element.innerHTML = yourHtmlString;
    var imgSrcUrls = element.getElementsByTagName("img");
    for (var i = 0; i < imgSrcUrls.length; i++) {
        var urlValue = imgSrcUrls[i].getAttribute("src");
        if (urlValue) {
            // return urlValue;
            console.log(urlValue);
            download(urlValue, './img/'+urlValue.split('/').pop(), function () {
                console.log('done');
            });
            // imgSrcUrls[i].setAttribute("src", "You Desired Change");
        }
    }
}

console.log(data.length)
let questionCount = 0;
data.forEach((set) => {

    set.forEach((question) => {
        questionCount += 1
        parseHtmlString(question.explain);
        // delete (dom);
        // console.log(question.explain.length)
    });
});
console.log(questionCount / 6);