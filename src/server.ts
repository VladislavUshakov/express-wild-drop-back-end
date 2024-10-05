import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app';

dotenv.config();

const DB_HOST: string = process.env.DB_HOST ?? '';
const PORT = process.env.PORT ?? '4200';

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Database connection successful');
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.log(error);
    process.exit(1);
  });
