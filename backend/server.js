
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
// const uri = "mongodb+srv://apr1:apr123@cluster0.f9d6o.gcp.mongodb.net/Activities-apr2";
const uri = "mongodb+srv://joy:joy@cluster0.ec8kjql.mongodb.net/todoMERN101"
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true   }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


// import routes
const activityRouter = require('./routes/activities');

// adding /activity to before all routes
app.use('/activity', activityRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
