const http = require(“https”);
const options = {
	“method”: “GET”,
	“hostname”: “covid-19-data.p.rapidapi.com”,
	“port”: null,
	“path”: “/country/all”,
	“headers”: {
		“x-rapidapi-host”: “covid-19-data.p.rapidapi.com”,
		“x-rapidapi-key”: “a46f802688msh00a80142ba67283p1315b4jsndd2840e3e8f0”,
		“useQueryString”: true
	}
};
const req = http.request(options, function (res) {
	const chunks = [];
	res.on(“data”, function (chunk) {
		chunks.push(chunk);
	});
	res.on(“end”, function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});