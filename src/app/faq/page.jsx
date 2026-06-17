"use client";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    category: "booking",
    question: "How do I book a livestock animal?",
    answer:
      "First, you need to log in to your account. Then go to the All Animals page, choose your preferred animal, and click the Details button. On the details page, fill in the booking form with your name, email, phone, and address to complete the booking.",
  },
  {
    id: 2,
    category: "booking",
    question: "Is login required to place a booking?",
    answer:
      "Yes, you must be logged in to book an animal. If you are not logged in, the booking form will not be visible on the Animal Details page. Please log in or register first.",
  },
  
  {
    id: 3,
    category: "animal",
    question: "What types of animals are available on QurbaniHat?",
    answer:
      "QurbaniHat offers a variety of Qurbani animals including cows and goats. Each listing includes detailed information such as breed, weight, age, price, and location.",
  },
  
 
  
 
  {
    id: 4,
    category: "profile",
    question: "How do I view my profile?",
    answer:
      "After logging in, click your avatar in the Navbar and go to My Profile. You will see your name, email, and profile photo displayed there.",
  },
  {
    id: 5,
    category: "profile",
    question: "How do I update my profile information?",
    answer:
      "Go to My Profile and click the Update button. You will be taken to an update page where you can change your name and profile photo URL. Click Update Information to save the changes.",
  },
  {
    id: 6,
    category: "qurbani",
    question: "What should I check before buying a Qurbani animal?",
    answer:
      "Check the animal's age (cows must be at least 2 years old, goats at least 1 year), overall health, weight, and ensure there are no physical defects. Visit our Qurbani Tips section on the home page for a full guide.",
  },
  {
    id: 7,
    category: "qurbani",
    question: "Which breeds are best for Qurbani?",
    answer:
      "Local Deshi cows, Shahiwal, Brahman, and Deshi goats are popular choices for Qurbani. Check out our Top Breeds section on the home page for a detailed comparison.",
  },
];

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-xl shadow-sm overflow-hidden mb-3 bg-white">
      {/* Question */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-5 py-4 bg-gray-50 hover:bg-gray-100"
      >
        <span className="font-semibold text-[#0c4532] text-left">
          {faq.question}
        </span>
        <span className="text-xl font-bold">{open ? "−" : "+"}</span>
      </button>

      {/* Answer */}
      {open && (
        <div className="px-5 py-4 text-gray-600 border-t">{faq.answer}</div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="bg-white py-12 animate__animated animate__slideInLeft animate__slow">
      <div className="w-11/12 mx-auto max-w-3xl">
        {/* Header */}
        <h2 className="text-3xl mt-8  font-bold text-center text-[#0c4532]">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="mt-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
