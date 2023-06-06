/* eslint-disable react/prop-types */


const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center pt-20">
            <p className="text-lg">---{subHeading}---</p>
            <p className="text-2xl mt-4 text-orange-500">{heading}</p>
        </div>
    );
};

export default SectionTitle;