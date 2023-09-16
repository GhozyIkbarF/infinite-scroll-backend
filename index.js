import express from 'express';

import cors from 'cors';
const app = express()
import router from './router.js';

// sungkem dulu sama masterrrrrr ghooozyyyy

console.log("master ghozyy jos")
app.use(cors())
app.use(express.json());
app.use(router);

const port  = 5000
app.listen(port);
