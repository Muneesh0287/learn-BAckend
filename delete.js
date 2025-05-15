const dbConnect = require('./mongodb')

const deleteData =async()=>{
const db = await dbConnect()
let res = await db.deleteOne({name : 'Bag'})
console.log(res);

}
deleteData()