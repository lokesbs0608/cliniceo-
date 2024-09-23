import HeroSectionVideo from "../../assets/heroSection.mp4";

const HeroSection = () => {
    return (
        <div className="min-h-auto   bg-[#e6e6e6] py-14">
            <div className="mx-auto container flex flex-col justify-center items-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-normal leading-none tracking-tight py-2 text-[#1c75bc] font-playfair">
                    A Typical Aesthetic Patient’s Journey
                </h1>

                <video autoPlay loop muted className=" h-auto aspect-video">
                    <source src={HeroSectionVideo} type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default HeroSection;
