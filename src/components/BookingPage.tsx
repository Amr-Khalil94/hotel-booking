"use client"

import type React from "react"
import { useContext, useState } from "react"
import { BookingContext } from "../context/BookingContext"

const BookingPage: React.FC = () => {
  const { nights, guests, totalPrice, updateNights, updateGuests, calculateTotal } = useContext(BookingContext)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [nightsInput, setNightsInput] = useState(nights.toString())
  const [guestsInput, setGuestsInput] = useState(guests.toString())

  const handleNightsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setNightsInput(value)
    if (value) {
      updateNights(Number(value))
    }
  }

  const handleGuestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setGuestsInput(value)
    if (value) {
      updateGuests(Number(value))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    calculateTotal() // Calculate total only on submission
    setIsSubmitted(true)
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-bold">Booking Form</h2>
          <form onSubmit={handleSubmit}>
            <label className="block mt-4">
              Nights:
              <input
                type="number"
                value={nightsInput}
                onChange={handleNightsChange}
                className="border px-2 py-1 mt-1"
                min="1"
              />
            </label>
            <label className="block mt-4">
              Guests:
              <input
                type="number"
                value={guestsInput}
                onChange={handleGuestsChange}
                className="border px-2 py-1 mt-1"
                min="1"
              />
            </label>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">
              Submit Booking
            </button>
          </form>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-bold text-center">Booking Summary</h2>
          <p>Nights: {nights}</p>
          <p>Guests: {guests}</p>
          {isSubmitted && <p>Total: ${totalPrice}</p>}
        </div>
      </div>
    </div>
  )
}

export default BookingPage
