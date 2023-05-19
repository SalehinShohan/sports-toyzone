import Banner from "../Banner/Banner";
import CustomerReview from "../CustomerReview/CustomerReview";
import Features from "../Freatures/Features";
import GalleryZone from "../GalleryZone/GalleryZone";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GalleryZone></GalleryZone>
            <Features></Features>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;