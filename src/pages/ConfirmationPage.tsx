"use client"

import { useNavigate } from "react-router-dom"
import { useBooking } from "../context/BookingContext"

const ConfirmationPage = () => {
  const navigate = useNavigate()
  const { nights, guests, totalPrice } = useBooking()

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold text-center mb-6">Booking Confirmed!</h2>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center border-b pb-2">
          <span className="font-medium">Nights:</span>
          <span>{nights}</span>
        </div>
        <div className="flex justify-between items-center border-b pb-2">
          <span className="font-medium">Guests:</span>
          <span>{guests}</span>
        </div>
        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total Price:</span>
          <span>${totalPrice}</span>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Book Another Stay
        </button>
      </div>
    </div>
  )
}

export default ConfirmationPage
