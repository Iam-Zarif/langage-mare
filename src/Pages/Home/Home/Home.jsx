import Title from "../../../Title/Title";
import Carousel from "../Carousel/Carousel";
import PopularClasses from "./PopularClasses/PopularClasses";


const Home = () => {
    Title("LANGUAGE MARE")
    return (
        <div>
            <Carousel></Carousel>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;