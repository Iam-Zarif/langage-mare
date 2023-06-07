import Title from "../../../Title/Title";
import Carousel from "../Carousel/Carousel";
import HomeInstructors from "../HomeInstructors/HomeInstructors";
import Timer from "../Timer/Timer";
import PopularClasses from "./PopularClasses/PopularClasses";


const Home = () => {
    Title("LANGUAGE MARE")
    return (
        <div>
            <Carousel></Carousel>
            <PopularClasses></PopularClasses>
            <Timer></Timer>
            <HomeInstructors></HomeInstructors>
        </div>
    );
};

export default Home;