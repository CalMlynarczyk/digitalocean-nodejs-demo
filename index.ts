import express from 'express';

const app = express();

app.get('/', (req, res) => {
	console.log('Request received');
  res.send('Hello World!');
});

const port: number = typeof process.env.PORT === 'string'
  ? parseInt(process.env.PORT)
  : 3030;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
