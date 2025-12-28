import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What services do you offer for weddings?",
    answer: "We provide end-to-end services including Venue Decoration, Catering, Photography/Videography, DJ & Sound, Bridal Makeup, and Logistics (Transport/Vintage Cars)."
  },
  {
    question: "How do I book your services?",
    answer: "You can call us directly or fill out the contact form. We recommend booking at least 2-3 months in advance for peak wedding dates. A token advance is required to block the date."
  },
  {
    question: "Can I customize a wedding package?",
    answer: "Yes! We specialize in custom packages. You can pick and choose services (e.g., only Decor + Catering) based on your budget and requirements."
  },
  {
    question: "Do you travel outside Deoria?",
    answer: "Absolutely. We manage events across Gorakhpur, Siwan, Kushinagar, and nearby districts. Transportation charges may apply."
  },
  {
    question: "What is your payment and cancellation policy?",
    answer: "We take a 25% advance to confirm booking. The remaining balance is due on the event day. Cancellations made 30 days prior may be eligible for a partial refund."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-brand-light py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold text-brand-dark">Common Questions</h2>
          <p className="text-gray-500 mt-2">Everything you need to know about planning with us.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-orange-50 transition-colors"
              >
                <span className="font-bold text-gray-800 text-lg pr-4">{faq.question}</span>
                {openIndex === index ? <Minus className="text-brand-primary shrink-0" /> : <Plus className="text-gray-400 shrink-0" />}
              </button>
              
              {openIndex === index && (
                <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;