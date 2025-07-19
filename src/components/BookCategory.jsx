import { Link } from "react-router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const BookCategory = () => {
  const categories = [
    {
      id: 1,
      image: "https://i.ibb.co/359TXTbz/drama.jpg",
      category_name: "Drama",
      categories: "drama",
    },
    {
      id: 2,
      image: "https://i.ibb.co/KjXBNs0f/history.jpg",
      category_name: "History",
      categories: "history",
    },
    {
      id: 3,
      image: "https://i.ibb.co/ymCpXQSs/novel.jpg",
      category_name: "Novel",
      categories: "novel",
    },
    {
      id: 4,
      image: "https://i.ibb.co/4Dgbtwc/thriller.jpg",
      category_name: "Thriller",
      categories: "thriller",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 20% of element is visible
    triggerOnce: false, //it will trigger every time
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section ref={ref} className="max-w-9/12 mx-auto py-10">
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          },
        }}
        className="text-4xl font-bold mb-1 md:mb-2 lg:mb-2"
      >
        Featured <span className="text-blue-600">Categories</span>
      </motion.h1>

      <motion.p
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { delay: 0.2, duration: 0.5 },
          },
        }}
        className="mb-8"
      >
        Embark book on futuristic journeys. Novel, Thriller, History and Drama
        wonders await in these mind-bending sagas.
      </motion.p>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={container}
        className="max-w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            variants={item}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <Link
              to={`/books/${cat.categories}`}
              className="bg-blue-100 p-4 rounded-lg shadow-md flex flex-col"
            >
              <div className="rounded-sm">
                <img
                  src={cat.image}
                  alt={cat.category_name}
                  className="w-full h-[330px] object-cover rounded-sm"
                />
              </div>
              <h3 className="text-xl text-gray-800 font-semibold mt-4 text-center">
                {cat.category_name}
              </h3>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BookCategory;
