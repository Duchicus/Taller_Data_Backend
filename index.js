const express = require('express');
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
const { dbConnection } = require('./config/config.js');
const cors = require('cors');
app.use(express.json());
app.use(cors());
dbConnection();


// app.get('/api/news/', async (req, res) => {
//     const year=req.query.year
//     const month=req.query.month
//     const key=req.query.key
//   try {
//     const response = await axios.get("https://api.nytimes.com/svc/archive/v1/"+year+"/"+month+".json?api-key="+key);
//     const newresponse=response.data.response.docs.map((doc) =>{ 
//         const {document_type,news_desk,section_name,subsection_name,type_of_material,_id,word_count,uri,...rest}= doc
//         return rest
//     })
//     res.header("Access-Control-Allow-Origin", "*")
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     res.header("Access-Control-Allow-credentials", true);
//     res.header("Access-Control-Allow-Methods", "GET");
//     res.json({response:newresponse});
//   } catch (error) {
//     res.status(500).send({ 
//         error: 'Error fetching data from New York Times'
//     });
//   }
// });


app.listen(PORT, () => {
  console.log('Server running on port'+PORT);
});