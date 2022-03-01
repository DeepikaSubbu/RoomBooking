const express = require("express");
const mongo = require('./shared/connect');
const bookRouter = require("./Route/bookRouter");



const app = express();


app.use(express.json());
mongo.connect();

app.use('/book', bookRouter);


app.listen(3005);

// app.set('port', (process.env.PORT || 3005));
// app.listen(app.get('port'), function() {
//     console.log('Server started on port '+app.get('port'));
// });