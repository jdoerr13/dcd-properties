"use client";
import { useState } from "react";
import Link from "next/link";

export default function MaintenanceRequest() {
  const [submitted, setSubmitted] = useState(false);

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  const response = await fetch("https://formspree.io/f/mvgrpavy", {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" }
  });
  if (response.ok) {
    setSubmitted(true);
  } else {
    alert("Something went wrong. Please try again.");
  }
}

  return (
    <section className="py-16 bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-xl mx-auto w-full">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-block mb-4 text-blue-700 hover:underline text-sm font-semibold"
        >
          ← Back to Home
        </Link>
        <div className="p-8 bg-white rounded-2xl shadow-lg">
          <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-900 tracking-tight">
            Maintenance Request
          </h2>
          {submitted ? (
            <div className="text-green-600 text-center font-semibold text-lg">
              Thank you! Your request has been submitted.
            </div>
          ) : (
            <form
              action="https://formspree.io/f/mvgrpavy"
              method="POST"
              onSubmit={handleSubmit}
              className="grid gap-4"
              encType="multipart/form-data"
            >
              <input name="tenant_name" type="text" placeholder="Full Name" required className="border rounded-lg px-4 py-3 w-full" />
              <input name="address" type="text" placeholder="Unit or Property Address" required className="border rounded-lg px-4 py-3 w-full" />
              <input name="phone" type="tel" placeholder="Phone Number" required className="border rounded-lg px-4 py-3 w-full" />
              <input name="contact_time" type="text" placeholder="Best Time to Contact (optional)" className="border rounded-lg px-4 py-3 w-full" />
              <input name="email" type="email" placeholder="Email Address (optional)" className="border rounded-lg px-4 py-3 w-full" />
              <select name="request_type" required className="border rounded-lg px-4 py-3 w-full">
                <option value="">Type of Request</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Electrical">Electrical</option>
                <option value="HVAC">HVAC</option>
                <option value="Appliance">Appliance</option>
                <option value="Pest">Pest</option>
                <option value="Other">Other</option>
              </select>
              <textarea name="description" placeholder="Describe the issue in detail" required rows={4} className="border rounded-lg px-4 py-3 w-full" />
              <label className="inline-flex items-center">
                <input type="checkbox" name="emergency" value="Yes" className="mr-2" />
                This is urgent/emergency
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" name="permission_to_enter" value="Yes" className="mr-2" />
                Permission to enter if not home
              </label>
              <input name="preferred_entry_time" type="text" placeholder="Preferred Entry Times (optional)" className="border rounded-lg px-4 py-3 w-full" />
              <div>
                <label className="block mb-1 font-medium text-gray-700">Upload Photo (optional):</label>
                <input name="photo" type="file" accept="image/*" className="w-full" />
              </div>
              <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition font-semibold shadow-md">
                Submit Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
