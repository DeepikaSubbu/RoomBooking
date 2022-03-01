
const mongo = require('../shared/connect');


module.exports.getHallbooking = async (req,res,next) => {
    try {
        var data = await mongo.db.collection('Hallbooking').find().toArray();
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}

// module.exports.getHallbooking = async (req,res,next) => {
//     try {
//         var data = await mongo.db.collection('Hallbooking').findOne({_id: ObjectId(req.params.id)})
//         res.send(data);
//     } catch(err) {
//         console.log(err);
//         res.status(500).send(err);
//     }
// }


module.exports.createHallbooking = async (req,res,next) => {
    try {
        var data = await mongo.db.collection("Hallbooking").insertOne(req.body);
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}
module.exports.createuser = async (req,res,next) => {
    try {
        var data = await mongo.db.collection("user").insertOne(req.body);
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}
// module.exports.updateuser = async (req,res,next) => {
//     try {
//         var data = await mongo.db.collection("user").updateOne({RoomId:req.body.RoomId},{$set:{bookedstatus:1}});
//         res.send(data);
//     } catch(err) {
//         console.log(err);
//         res.status(500).send(err);
//     }
// }