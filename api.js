const express =require('express');
const dbConnect = require('./mongodb');
const app = express();
app.use(express.json());
const { ObjectId } = require('mongodb');

app.get('/',async(req,res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log("===>",data);
    
    res.send(data)
})
app.post('/',async(req,res)=>{
    let data  = await dbConnect()
    let result = await data.insertOne(req.body)
 res.send(result);
})
app.put('/:id',async(req,res)=>{
      const id = req.params.id;
       if (!/^[a-fA-F0-9]{24}$/.test(id)) {
        return res.status(400).send({ error: 'Invalid ID format' });
    }

    let data = await dbConnect();
    let result = await data.updateOne(
        {_id :new ObjectId(id)},{$set : req.body});
    res.send(result);
})

app.delete('/:id',async(req,res)=>{
    let data = await dbConnect();
    let result = await data.deleteOne({_id :new ObjectId(req.params.id)});
    res.send(result);
})


app.listen(5001);