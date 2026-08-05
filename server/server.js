import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import userRoutes from './routes/user.route.js';


const app = express();

app.use(express.json());
app.use(cors());

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// use routes
app.use('/users', userRoutes);



//Base route
app.get('/', (req, res) => {
  res.send('API is working!');
});