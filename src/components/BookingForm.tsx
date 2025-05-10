"use client"

import { useState, type FormEvent } from "react"
import { useBooking } from "../context/BookingContext"

interface BookingFormProps {
  onSubmitSuccess?: () => void
}

const BookingForm = ({ onSubmitSuccess }: BookingFormProps) => {
  const { nights, guests, updateNights, updateGuests } = useBooking()
  const [nightsInput, setNightsInput] = useState(nights)
  const [guestsInput, setGuestsInput] = useState(guests)
  const [submitted, setSubmitted] = useState(false)

  const handleNightsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (value > 0) {
      setNightsInput(value)
      updateNights(value)
    }
  }

  const handleGuestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (value > 0) {
      setGuestsInput(value)
      updateGuests(value)
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    if (onSubmitSuccess) {
      onSubmitSuccess()
    }
  }

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-4">Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">
            Nights:
            <input
              type="number"
              min="1"
              value={nightsInput}
              onChange={handleNightsChange}
              className="w-full border px-2 py-1 mt-1 rounded"
              required
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block mb-2">
            Guests:
            <input
              type="number"
              min="1"
              value={guestsInput}
              onChange={handleGuestsChange}
              className="w-full border px-2 py-1 mt-1 rounded"
              required
            />
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition-colors"
        >
          Submit Booking
        </button>

        {submitted && !onSubmitSuccess && <p className="mt-4 text-green-500">Booking submitted successfully!</p>}
      </form>
    </div>
  )
}

export default BookingForm