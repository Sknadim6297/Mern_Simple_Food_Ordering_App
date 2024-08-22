import ErrorHandler from "../error/error.js";
import Reservation  from "../models/reservationSchema.js";




export const sendReservation = async (req, res, next) => {
  console.log(req.body);
  const { firstname , lastname, email, phone } = req.body;
  if (!firstname || !lastname || !email || !phone ) {
    return next(new ErrorHandler(400, "All fields are required"));
  }
  try {
    await Reservation.create({firstname,lastname,email,phone});
    res.status(200).
    json({
      success: true,
      message: "Reservation created successfully",
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const massage= Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(400, massage));
    }
  }

}
