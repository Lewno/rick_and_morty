const axios = require("axios");
const {KEY, URL} = process.env; 

const getCharDetail = (req, res)=>{
  
    const {id} = req.params;

    axios.get(`${URL}/character/${id}?key=${KEY}`)
    .then(response => {
      const  {id,name,species,image,gender, origin}  = response.data;
      res.status(200).json({id,name,species,image,gender,origin})  
    }).catch((error)=>{
      res.status(404).json({error : error.mesagge});  
    })
};


module.exports = getCharDetail;