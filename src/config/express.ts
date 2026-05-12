import express from 'express';

const app = express(); 

const port = process.env.PORT || 3333;

app.set('port', port);

app.use(express.json()); 

export default app;