import { render, screen, fireEvent } from "@testing-library/react"
import { BookingProvider } from "../context/BookingContext"
import BookingPage from "../components/BookingPage"

describe("BookingPage", () => {
  test("total price is only calculated and shown after form submission", () => {
    render(
      <BookingProvider>
        <BookingPage />
      </BookingProvider>,
    )

    // Total should not be visible initially
    expect(screen.queryByText(/Total:/)).not.toBeInTheDocument()

    // Submit the form
    const submitButton = screen.getByText("Submit Booking")
    fireEvent.click(submitButton)

    // Total should now be visible with initial value
    expect(screen.getByText(/Total:/)).toBeInTheDocument()
    expect(screen.getByText(/Total:/)).toHaveTextContent("$100")
  })

  test("updates total price correctly when nights and guests change and form is submitted", () => {
    render(
      <BookingProvider>
        <BookingPage />
      </BookingProvider>,
    )

    const nightsInput = screen.getByLabelText(/Nights:/) as HTMLInputElement
    const guestsInput = screen.getByLabelText(/Guests:/) as HTMLInputElement
    const submitButton = screen.getByText("Submit Booking")

    // Update nights to 2
    fireEvent.change(nightsInput, { target: { value: "2" } })

    // Update guests to 2
    fireEvent.change(guestsInput, { target: { value: "2" } })

    // Submit the form
    fireEvent.click(submitButton)

    // Check total price
    const totalElement = screen.getByText(/Total:/)
    expect(totalElement).toHaveTextContent("$360")
  })

  test("input fields start with initial values and can be changed", () => {
    render(
      <BookingProvider>
        <BookingPage />
      </BookingProvider>,
    )

    const nightsInput = screen.getByLabelText(/Nights:/) as HTMLInputElement
    const guestsInput = screen.getByLabelText(/Guests:/) as HTMLInputElement


    expect(nightsInput.value).toBe("1")
    expect(guestsInput.value).toBe("1")


    fireEvent.change(nightsInput, { target: { value: "3" } })
    fireEvent.change(guestsInput, { target: { value: "4" } })

   
    expect(nightsInput.value).toBe("3")
    expect(guestsInput.value).toBe("4")
  })
})
