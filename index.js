const express = require('express');
const axios = require('axios');
const compression = require('compression');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(compression());

app.get('/ibpt', async (req, res) => {
	try {
		const { data } = await axios({
			timeout: 60000,
			method: 'GET',
			url: 'https://apidoni.ibpt.org.br/api/v1/produtos',
			params: req.query
		});
		res.json(data);
	}
	catch(err) {
		console.error(err.message);
		res.status(500).send(err.message);
	}
});

app.listen(process.env.PORT, () => {
	console.log('Servidor rodando');
});