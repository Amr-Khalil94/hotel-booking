import { BookingProvider } from "./context/BookingContext"
import BookingPage from "./components/BookingPage"

function App() {
  return (
    <BookingProvider>
      <BookingPage />
    </BookingProvider>
  )
}

export default App
