import React from "react";
import { motion } from "framer-motion";

const GuaranteesSection = () => {
  return (
    <div className="max-w-9/12 mx-auto px-4 py-12">
      {/* Header and Paragraph */}
      <div className="mb-12">
        <motion.h1
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 12 }}
          className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 text-center"
        >
          Customer Shopping <span className="text-blue-600">Experience</span>
        </motion.h1>
        <motion.p
          initial={{ x: 10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 12 }}
          className="text-gray-600 max-w-6xl text-center"
        >
          We prioritize your satisfaction with our transparent policies and
          secure shopping environment. Enjoy peace of mind with our guarantees,
          free shipping options, and trusted payment security.
        </motion.p>
      </div>

      {/* Cards Container */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60, damping: 12 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-10/12 mx-auto"
      >
        {/* Money Back Card */}
        <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-blue-50">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">
              100% Money Back
            </h3>
          </div>
          <p className="text-gray-600 text-sm">
            Our guarantee ensures a full refund if your purchase doesn't meet
            expectations, no questions asked.
          </p>
        </div>

        {/* Free Shipping Card */}
        <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-blue-50">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Free Shipping
            </h3>
          </div>
          <p className="text-gray-600 text-sm">
            Qualify for free delivery on orders above a minimum value, making
            your shopping even more rewarding.
          </p>
        </div>

        {/* Secure Payment Card */}
        <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-blue-50">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Secure Payment
            </h3>
          </div>
          <p className="text-gray-600 text-sm">
            Your transactions are protected by PCI-DSS standards, ensuring data
            safety at every step.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default GuaranteesSection;
