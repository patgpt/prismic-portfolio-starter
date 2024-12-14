import React from "react"

function Footer() {
  return (
    <footer className="bg-base-200 p-4 text-base-content">
      <div className="container mx-auto p-4">
        <p className="text-center text-sm text-base-content">
          &copy; {new Date().getFullYear()} Patrick Kelly - All Rights Reserved
          - Built in 🇨🇦 with ❤️ Next.js
        </p>
      </div>
    </footer>
  )
}

export default Footer
