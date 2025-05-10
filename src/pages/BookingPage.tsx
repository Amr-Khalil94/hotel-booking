import { useNavigate } from "react-router-dom"
import BookingForm from "../components/BookingForm"
import BookingSummary from "../components/BookingSummary"

const BookingPage = () => {
  const navigate = useNavigate()

  const handleSubmitSuccess = () => {
    navigate("/confirmation")
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BookingForm onSubmitSuccess={handleSubmitSuccess} />
        <BookingSummary />
      </div>
    </div>
  )
}

export default BookingPage