

const Title = ({ title }) => {
    return (
        <div className="relative font-[400] leading-[57px] text-[48px] py-2 text-[#1c75bc] font-playfair after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-1/2 after:border-b-[3px] after:rounded-[30px] after:border-[#FFA34E]">
            {title}
        </div>
    );
};

export default Title;
