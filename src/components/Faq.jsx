import React from "react";
import { motion } from "framer-motion";

const Faq = () => {
  return (
    <>
      <section className="max-w-9/12 mx-auto">
        <div className="mt-8">
          <motion.h1
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60, damping: 12 }}
            className="text-2xl md:text-4xl font-bold text-center"
          >
            Frequently Asked <span className="text-blue-600">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ x: 10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60, damping: 12 }}
            className="text-gray-700 text-base mt-4 text-center"
          >
            We have answers (well, most of the times!)
          </motion.p>
        </div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 12 }}
          className="space-y-2 p-4 lg:pt-8 lg:pb-10 max-w-10/12 mx-auto"
        >
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">
              How do I borrow a book from the library?
            </div>
            <div className="collapse-content text-[15px]">
              To borrow a book, log in to your library account, search for the
              book in the catalog, and click "Borrow." Alternatively, present
              the book at the circulation desk with your library card. The due
              date will be displayed in your account and emailed to you.
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">
              Can I renew my borrowed books online?
            </div>
            <div className="collapse-content text-[15px]">
              Yes! Log in to your account, go to "My Borrowed Books," and select
              "Renew" for eligible items. Books can typically be renewed up to 2
              times unless another user has placed a hold. Overdue books may
              require in-person renewal.
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">
              What happens if I return a book late?
            </div>
            <div className="collapse-content text-[15px]">
              Late returns incur fines, which vary by material type (e.g.,
              $0.25/day for books, $1/day for DVDs). Accumulated fines must be
              paid to restore borrowing privileges. Check your library’s policy
              for exact rates.
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">
              How do I reserve a book that’s currently checked out?
            </div>
            <div className="collapse-content text-[15px]">
              Search for the book in the catalog and click "Place Hold." You’ll
              be notified via email or SMS when it’s available. Holds can be
              picked up at your designated branch within 3 days of notification.
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">
              Can I access e-books or online resources remotely?
            </div>
            <div className="collapse-content text-[15px]">
              Absolutely! Use your library card number and PIN to log in to the
              digital library portal. E-books, audiobooks, and databases are
              available 24/7 through platforms like OverDrive or Libby.
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">
              How do I report a lost or damaged book?
            </div>
            <div className="collapse-content text-[15px]">
              Contact the circulation desk immediately. Replacement fees (book
              cost + processing) may apply. Lost items found within 30 days may
              qualify for a refund if undamaged.
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Faq;
