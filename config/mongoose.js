const mongoose = require('mongoose');


const DB = `mongodb+srv://bhupendra_giradkar:bhupendra12345@cluster0.vo8vv.mongodb.net/`;
mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

module.exports = mongoose;
