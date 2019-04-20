import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Character = new Schema({
    name: {
        type: String
    },
    gender: {
        type: String
    }
});

export default mongoose.model('Character', Character);  