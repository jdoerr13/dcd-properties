"use client";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-block mb-4 text-blue-700 hover:underline text-sm font-semibold"
        >
          ← Back to Home
        </Link>
        <div className="bg-white p-10 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-900">
            Tenant / Owner Login
          </h1>
          <form className="space-y-6">
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white w-full px-4 py-3 rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-700 transition"
            >
              Log In
            </button>
          </form>
          <p className="text-center mt-6 text-gray-600 text-sm">
            <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
          </p>
        </div>
      </div>
    </section>
  );
}
