import React, { useState } from "react"; // ← add useState here

const FeedbackForm: React.FC = () => {
  // ✅ 1. Add this state at the top of the component
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // ✅ 2. Add this change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // ✅ 3. Add this submit handler (builds mailto link)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:elise.neo@herbiestreaks.xyz?subject=${encodeURIComponent(
      formData.subject || "Feedback from Herbie site"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  // ✅ 4. Keep your JSX (just attach onSubmit and value/onChange)
  return (
    <section className="w-full bg-brandBlue/50 shadow-lg rounded-[25px] p-6 lg:p-14 text-brandDark font-inter">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-lg font-medium mb-2">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-2xl bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brandGreen transition"
          />
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-2xl bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brandGreen transition"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-lg font-medium mb-2">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            placeholder="What’s this about?"
            value={formData.subject}
            onChange={handleChange}
            className="w-full rounded-2xl bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brandGreen transition"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-lg font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Type your message here..."
            rows={7}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-2xl bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brandGreen transition resize-none"
          ></textarea>
        </div>

        {/* Send Button */}
        <button
          type="submit"
          className="w-full bg-brandGreen text-white text-lg font-medium py-3 rounded-2xl hover:bg-[#7bb49b] transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default FeedbackForm;


