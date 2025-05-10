"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

export interface BookingContextData {
  nights: number
  guests: number
  totalPrice: number
  updateNights: (nights: number) => void
  updateGuests: (guests: number) => void
  calculateTotal: () => void
}

export const BookingContext = createContext<BookingContextData>({
  nights: 1,
  guests: 1,
  totalPrice: 100,
  updateNights: () => {},
  updateGuests: () => {},
  calculateTotal: () => {},
})

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [nights, setNights] = useState(1)
  const [guests, setGuests] = useState(1)
  const [totalPrice, setTotalPrice] = useState(100)
  const basePrice = 100
  const extraFee = 80

  const updateNights = (newNights: number) => {
    setNights(newNights)
    // Don't update total price here
  }

  const updateGuests = (newGuests: number) => {
    setGuests(newGuests)
    // Don't update total price here
  }

  const calculateTotal = () => {
    const newTotal = nights * basePrice + (guests - 1) * extraFee * nights
    setTotalPrice(newTotal)
  }

  return (
    <BookingContext.Provider
      value={{
        nights,
        guests,
        totalPrice,
        updateNights,
        updateGuests,
        calculateTotal,
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export const useBooking = () => useContext(BookingContext)
