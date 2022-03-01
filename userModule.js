const mongo = require('../shared/connect');

module.exports.createFind=async(req,res,next) => {
    try{
        console.log("inserted data")
        var data=await mongo.db.collection("Hallbooking").findOne({RoomId:req.body.RoomId});
         
        if(data.bookedstatus==0)
        {
            var user = await mongo.db.collection("user").insertOne(req.body)

            var a = await mongo.db.collection("Hallbooking").updateOne({RoomId:req.body.RoomId},{$set:{bookedstatus:1}})

            res.send(user);
            res.send(a);
        }
        else
        {
            res.send("Room is already booked");
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send(err);
         }
}
