import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the User Schema.
const GiverSchema = new Schema({
	id: {
		type: String,
		required: true,
		unique: true
	},
	name: {
		type: String,
		required: true
	},
	exclude: {
		type: String,
		required: true,
    }
});

const Giver = mongoose.model("Giver", GiverSchema);

export default Giver;
