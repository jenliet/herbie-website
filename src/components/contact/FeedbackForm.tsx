// src/components/contact/FeedbackForm.tsx
import React, { useState } from "react";

const FeedbackForm: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/send-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="w-full bg-brandBlue/50 shadow-lg rounded-[25px] p-10 md:p-14 text-brandDark font-inter">
      <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-lg font-medium mb-2">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-2xl bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brandGreen transition"
            required
          />
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-2xl bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brandGreen transition"
            required
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-lg font-medium mb-2">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="What’s this about?"
            className="w-full rounded-2xl bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brandGreen transition"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-lg font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here..."
            rows={7}
            className="w-full rounded-2xl bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brandGreen transition resize-none"
            required
          ></textarea>
        </div>

        {/* Send Button */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-brandGreen text-white text-lg font-medium py-3 rounded-2xl hover:bg-[#7bb49b] transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-700 text-sm mt-2">
            ✅ Your message has been sent!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-sm mt-2">
            ❌ Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </section>
  );
};

export default FeedbackForm;



