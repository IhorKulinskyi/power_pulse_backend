const mongoose = require('mongoose');
// these 2 model imports must be deleted
require('./models/product');
require('./models/exercise');

const app = require('./app');

mongoose.set('strictQuery', true);

const { DB_HOST, PORT = 3030 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Database connection successful');

    app.listen(PORT, () => {
      console.log(`Server is running. Use our API on port: ${PORT}`);
    });
  })
  .catch(error => {
    console.log(error.message);

    process.exit(1);
  });
