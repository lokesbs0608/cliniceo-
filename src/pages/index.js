import SocialMediaCard from "@/components/SocialMedia";

export default function Home() {
  return (
    <div>
      <SocialMediaCard color={"#1C75BC"} />
      <div>
        <h1 className="font-[400 text-[#1C75BC] text-[20px] poppins">
          Explore More
        </h1>
        <h1 className="text-[48px] playfair font-[400]">
          A Typical Aesthetic Patient’s Journey
        </h1>
      </div>
    </div>
  );
}
