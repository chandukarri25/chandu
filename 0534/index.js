let express = require('express');
let path = require('path')
let app = express();

let bp = require('body-parser');
let mongoose = require('mongoose');
let bep = bp.urlencoded({extended:false});

mongoose.connect('mongodb://127.0.0.1:27017/SITE',{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>console.log(`connected...`));

let dataSchema = {
  fname:String,
  lname:String
}

let giri = mongoose.model('giri' ,dataSchema,'giri');


app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname+'/book.html'))
});

app.post('/submit',bep,(req,res)=>{
  let x = {fname:req.body.fname, lname : req.body.lnmae};
  contact.insertMany([X])
  res.send(x);
});

app.get('/display',async(req,res)=>{
  let x = await contact.find({});
  res.json(x);
});

app.put('/data',async(req,res)=>{
  let x = await contact.updateOne({fname:"sai"},{$set:{fname:"ravi"}});
  res.send(x);
})

app.delete('/data',async(req,res)=>{
  let x = await contact.deletOne({_id:""});
  res.send(x);
})

app.listen(8080,()=>{
  console.log('server run on http://127.0.0.1:8080');
})