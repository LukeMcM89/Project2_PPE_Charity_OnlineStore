const http = require("https");

const options = {
	"method": "GET",
	"hostname": "covid-19-data.p.rapidapi.com",
	"port": null,
	"path": "/country/all",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "aec57077b7mshe7c9917e3720dc3p12dae9jsn6c72418df371",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();