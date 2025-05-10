import type React from "react"
import { useBooking } from "../context/BookingContext"

const BookingSummary: React.FC = () => {
  const { nights, guests, totalPrice } = useBooking()

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-bold text-center mb-4">Booking Summary</h2>
      <div className="space-y-2">
        <p className="flex justify-between">
          <span className="font-medium">Nights:</span>
          <span>{nights}</span>
        </p>
        <p className="flex justify-between">
          <span className="font-medium">Guests:</span>
          <span>{guests}</span>
        </p>
        <div className="border-t pt-2 mt-4">
          <p className="flex justify-between font-bold">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default BookingSummary
