import React from "react";

const FeedbackForm: React.FC = () => {
  return (
    <section className="w-full md:w-1/2 bg-brandBlue/50 shadow-lg rounded-[50px] p-10 md:p-14 text-brandDark font-inter">
      <form className="flex flex-col space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-lg font-medium mb-2">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
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
            rows={6}
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

