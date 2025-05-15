// const dbConnect =require("./mongodb")

// const insert =async()=>{
//     let db = await dbConnect();
//     const res = await db.insert(
//         [
//             {name: 'Max1',brand : 'MicroMax', price: 120,},
//             {name: 'Max2',brand : 'MicroMax', price: 220,},
//             {name: 'Max3',brand : 'MicroMax', price: 320,}

//         ]
//     )
//     if(res.acknowledged){
//         console.log("inserted Data ========>");
//     }
    
// }
// insert()


const dbConnect = require("./mongodb");

const insert = async () => {
    let db = await dbConnect();
    const res = await db.insertMany([
        { name: 'Max1', brand: 'MicroMax', price: 120 },
        { name: 'Max2', brand: 'MicroMax', price: 220 },
        { name: 'Max3', brand: 'MicroMax', price: 320 }
    ]);
    
    if (res.acknowledged) {
        console.log("Inserted Data ========>", res.insertedCount, "documents");
    }
};

insert();
