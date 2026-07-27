import Link from "next/link";

export default function ThankYouPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm p-10 max-w-md w-full text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl">
          ✓
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mt-6">
          Thank You for Reaching Out!
        </h1>
        <p className="text-gray-500 mt-2">
          Your inquiry has been received. Our engineers will get back to you
          within 24 hours.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}