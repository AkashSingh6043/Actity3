import express from 'express';
import connectDatatbase from './config/db';

const app = express();

app.get('/', (req, res) => res.send('http get request sent to root api endpoint'));

app.listen(3000, () => onslotchange.log('Express server running on port 3000'));