import BookCategory from "../components/BookCategory";
import GuaranteesSection from "../components/GuranteesSection";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <div className="bg-gray-50">
        <Hero></Hero>
        <BookCategory></BookCategory>
        <GuaranteesSection></GuaranteesSection>
        <Testimonial></Testimonial>
        <Faq></Faq>
      </div>
    </>
  );
};

export default Home;
