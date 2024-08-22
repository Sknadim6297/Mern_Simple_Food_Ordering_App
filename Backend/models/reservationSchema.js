
import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minLength: [3, 'First name should be at least 3 characters long'],
        maxLength: [30, 'First name should be at most 50 characters long']
    },
    lastname: {
        type: String,
        required: true,
        minLength: [3, 'Last name should be at least 3 characters long'],
        maxLength: [30, 'Last name should be at most 50 characters long']
    },
    email: {
        type: String,
        required: true,
    },
        phone: {
            type: String,
            required: true,
            minLength : [10, 'Phone number should be at least 10 characters long'],
            maxLength : [15, 'Phone number should be at most 15 characters long'],
        },
    },{timestamps:true});

    
const Reservation = mongoose.model('Reservation', reservationSchema);
export default Reservation;