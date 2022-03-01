const {MongoClient} = require("mongodb");



module.exports = {
    db: {},
    async connect() {
        try{
            const client = await MongoClient.connect("mongodb+srv://user230:roja12@cluster0.zytx0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");          
            this.db = client.db("Task1");
            console.log(this.db)
        } catch(err) {
            console.log(err)
        }
    }
}