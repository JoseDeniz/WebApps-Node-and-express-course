var http = require('http');
var xml2js = require('xml2js');
var parser = xml2js.Parser({explicitArray: false});

var goodReadServices = () => {

    var getBookById = (id, cb) => {
        var options = {
            host: 'www.goodreads.com',
            path: '/book/show/' + id + '?format=xml&key=xkc9mCKeWN4pKV2g5ui6g'
        };
        var callback = (response) => {
            var str = '';
            response.on('data', (chunk) => {
                str += chunk;
            });
            response.on('end', () => {
                parser.parseString(str, (err, result) => {
                    cb(null, result.GoodreadsResponse.book);
                });
            });
        };
        http.request(options, callback).end();
    };

    return {
        getBookById: getBookById
    };
};

module.exports = goodReadServices;