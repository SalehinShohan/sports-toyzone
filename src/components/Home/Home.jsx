import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import CustomerReview from "../CustomerReview/CustomerReview";
import Features from "../Freatures/Features";
import GalleryZone from "../GalleryZone/GalleryZone";
import useTitle from "../Hooks/useTitle";

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <GalleryZone></GalleryZone>
            <Features></Features>
            <CustomerReview></CustomerReview>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;