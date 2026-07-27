"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ACCESS_KEY_1 = "YOUR_FIRST_ACCESS_KEY";
const ACCESS_KEY_2 = "YOUR_SECOND_ACCESS_KEY";

async function submitToWeb3Forms(accessKey, data) {
  const formData = new FormData();
  formData.append("access_key", accessKey);
  Object.entries(data).forEach(([k, v]) => formData.append(k, v));

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });
  return res.json();
}

export default function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: form.elements.namedItem("name").value,
      company: form.elements.namedItem("company").value,
      email: form.elements.namedItem("email").value,
      phone: form.elements.namedItem("phone").value,
      interested_in: form.elements.namedItem("interested_in").value,
      message: form.elements.namedItem("message").value,
    };

    try {
      const results = await Promise.allSettled([
        submitToWeb3Forms(ACCESS_KEY_1, data),
        submitToWeb3Forms(ACCESS_KEY_2, data),
      ]);

      const anySuccess = results.some(
        (r) => r.status === "fulfilled" && r.value.success
      );

      if (anySuccess) {
        router.push("/contact/thank-you");
      } else {
        setError("Submission failed. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="font-semibold text-sm text-gray-900">Full Name</label>
          <input
            name="name"
            required
            placeholder="Your name"
            className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="font-semibold text-sm text-gray-900">Company</label>
          <input
            name="company"
            placeholder="Company name"
            className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="font-semibold text-sm text-gray-900">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@company.com"
            className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="font-semibold text-sm text-gray-900">Phone / WhatsApp</label>
          <input
            name="phone"
            placeholder="+1 555 000 0000"
            className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div>
        <label className="font-semibold text-sm text-gray-900">Interested In</label>
        <select
          name="interested_in"
          className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary bg-white"
        >
          <option value="">Select a machine type</option>
          <option value="injection-molding">Injection Molding Machine</option>
          <option value="blow-molding">Blow Molding Machine</option>
          <option value="extrusion">Extrusion Line</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="font-semibold text-sm text-gray-900">Your Message</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your production needs, capacity, materials..."
          className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Inquiry"} →
      </button>
    </form>
  );
}