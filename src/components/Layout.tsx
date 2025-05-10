import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-center mb-8">Hotel Booking</h1>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
