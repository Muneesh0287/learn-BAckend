const dbConnect =require('./mongodb');

const updateData=async()=>{
let data = await dbConnect();
let res = await data.updateOne(
    {name : 'Max1'},{
        $set:{name : 'MAx 1', price: 499}
    }
);
console.log("=====>",res);

}
updateData()