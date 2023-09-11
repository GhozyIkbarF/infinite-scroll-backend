import express from 'express';

import cors from 'cors';
const app = express()
import router from './router.js';

const allowedOrigins = ['https://infinite-scroll-taupe.vercel.app/', 'http://127.0.0.1:5500/index.html'];

const corsOptions = {
  origin: allowedOrigins,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions))
app.use(express.json());
app.use(router);

const port  = 5000
app.listen(port);