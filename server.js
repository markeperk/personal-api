var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.listen(8080);

var user = {
	name: 'Mark',
	location: 'Provo',
	hobbies: ['golf','outdoors'],
	occupations: ['marketing', 'unemployed', 'student'],
	mentions: ['http://www.google.com', 'http://www.expressjs.com'],
	references: ['John Doe', 'Jane Doe'],
	skills: [{
			id: 1,
			name: 'Javascript',
			experience: 'Intermediate'
		}, {
			id: 2,
			name: 'Node.js',
			experience: 'Hardly at all'
		}]
}


app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/', function(req, res) {
	res.json('test')
})


app.get('/name', function(req, res){
	res.json(user.name);
})
app.get('/location', function(req, res){
	res.json(user.location);
})
app.put('/location', function(req, res) {
	user.location = req.body.location;
	res.json(user.location)
})
app.get('/hobbies', function(req, res) {
	if (req.query.order === 'desc') {
		res.json(user.hobbies.reverse());
	}
	else if(req.query.order === 'asc') {
		res.json(user.hobbies.sort());
	}
	else {
		res.json(user.hobbies);
	}
})
app.get('/occupations', function(req, res) {
	res.json(user.occupations)
})
app.get('/occupations/latest', function(req, res) {
	res.json(user.occupations[user.occupations.length - 1])
})


//POST,GET
app.post('/', function(req, res) {
	console.log('test post');
	res.json('post')
});

// mentions
app.get('/mentions', function(req, res) {
	res.json(user.mentions);
});

app.post('/mentions', function(req, res) {
	user.mentions.push(req.body.mentions);
	res.json(user.mentions);
});

//references
app.get('/references', function(req, res) {
	res.json(user.references);
});

app.post('/references', function(req, res) {
	user.references.push(req.body.references);
	res.json(user.references);
});

//skills
app.get('/skills', function(req, res) {

	var filtered = [];

	for (var i = 0; i < user.skills.length; i++) {
		if (req.query.experience === user.skills[i].experience) {
				filtered.push(user.skills[i]);
			}
		}
	if(filtered.length > 0) {
		res.json(filtered)
	}
	else {
		res.json(user.skills)
	}
});

app.post('/skills', function(req, res) {
	user.skills.push(req.body.skills);
	res.json(user.skills);
});












