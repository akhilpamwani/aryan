// Importing all the required things


const express =require('express')
const cors =require('cors')
const mongoose =require('mongoose')
const Routes =require('./routes/router')
const dotenv = require( 'dotenv')

// Enviroment variable initialised

dotenv.config()

// Cpp and Port Initialisation

const app=express();

const PORT = 5000;




// Mongodb Connection 

  
mongoose.connect('mongodb://127.0.0.1:27017/Contact',{
  useNewUrlParser: true,
 
  useUnifiedTopology: true,
  
  

  
})
.then(() => console.log("MongoDB is connected"))
.catch((err) => console.log(err));



// Using all the delared thing


app.use(express.json());
app.use(cors());




      
// Runnning the Server

app.use('/api',Routes)
app.listen(PORT,()=>{
    console.log(`Server running sucessfully`)
})
