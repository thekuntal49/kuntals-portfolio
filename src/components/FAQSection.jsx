import React, { useState } from "react";
import data from "../utils/data.json";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs pb-10 border-zinc-700 mt-6">
      <h3 className="text-xl font-semibold mb-4 text-zinc-200">
        {data.faqsTitle}
      </h3>
      <div className="space-y-2">
        {data.faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-zinc-700 cursor-pointer transition-all duration-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center py-3"
            >
              <h4 className="text-lg font-semibold md:text-base">
                {faq.question}
              </h4>
              <span className="text-sm">
                {openIndex === index ? (
                  <IoIosArrowUp
                    size={32}
                    className="bg-zinc-700 p-2 rounded-full transition-all duration-200"
                  />
                ) : (
                  <IoIosArrowDown
                    size={32}
                    className="bg-zinc-700 p-2 rounded-full transition-all duration-200"
                  />
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="text-zinc-300 max-w-2xl text-sm md:text-base pr-2 pb-2">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
