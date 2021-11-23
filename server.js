const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);
    // GET Endpoint
    if (reqUrl.pathname == '/getTimeStories' && req.method === 'GET') {
        console.log('Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);

        sampleRequest(req, res);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/getTimeStories`);
});

sampleRequest = function (req, res) {
    const reqUrl = url.parse(req.url, true);
    console.log('requrl ', reqUrl);
    var response = 
        [
            {
            "title": "Saudi King Salman Hospitalized for Medical Tests",
            "link": "https://time.com/5868873/saudi-kind-salman-hospitalized/"
            },
            {
            "title": "Iran Executes Man Convicted of Spying on Soleimani",
            "link": "https://time.com/5868856/iran-executed-spy-soleimani/"
            },
            {
            "title": "Kim Jong Un Berates Officials Over Hospital Project",
            "link": "https://time.com/5868844/kim-jong-un-berate-hospital-officials/"
            },
            {
            "title": "Boy, 12, Driving Stolen Truck Leads Police on Chase",
            "link": "https://time.com/5868839/delaware-boy-stolen-truck-police/"
            },
            {
            "title": "N.J. Federal Judge’s Son Killed, Husband Wounded",
            "link": "https://time.com/5868834/new-jersey-federal-judge-shooting/"
            }];

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
};