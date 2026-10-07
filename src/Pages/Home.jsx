
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <section className="w-full max-w-5xl flex flex-col items-center justify-center gap-8">

        {/* Image */}
        <div className="w-full flex justify-center">
          <img
            src="https://www.medianews4u.com/wp-content/uploads/2022/08/eKart-unveils-its-new-brand-identity-1.jpg"
            alt="eKart"
            className="w-full max-w-4xl h-auto rounded-2xl shadow-xl object-cover"
          />
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-blue-700 hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>

      </section>

    </div>
  )
}
