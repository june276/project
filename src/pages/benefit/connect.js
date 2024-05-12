import mongoose from "mongoose";

const connectionURL = `mongodb+srv://projectplaytopia:1234@playtopia.f4fkwmu.mongodb.net/`;

const connect = () => {
	if (process.env.NODE_ENV !== 'production') {
		mongoose.set('debug', true);
	}

	mongoose.connect(connectionURL, {
		dbName: "playtopia",
	}).then(() => {
		console.log('Complete connection to benefitdb');
	}).catch((err) => {
		console.log('Fail connection to database');
		console.error(err);
	})
}

export default connect;
