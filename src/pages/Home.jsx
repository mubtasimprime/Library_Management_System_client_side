import BookCategory from "../components/BookCategory";
import GuaranteesSection from "../components/GuranteesSection";
import Faq from "../components/Faq";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <div className="bg-gray-50">
        <Hero></Hero>
        <BookCategory></BookCategory>
        <GuaranteesSection></GuaranteesSection>
        <Faq></Faq>
      </div>
    </>
  );
};

export default Home;
