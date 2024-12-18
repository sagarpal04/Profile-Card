import UserImage from "../images/profileImage.jpg";
import PropTypes from "prop-types";
const ProfileCard = ({ skills }) => {
  return (
    <div className="border-black border-4 w-[70%] lg:w-[33%] rounded-lg shadow-lg h-[60%]">
      <div className="h-2/4 overflow-hidden rounded-sm">
        <img
          src={UserImage}
          className="w-full h-full object-cover"
          alt="User Image"
        />
      </div>
      <div className="p-12 lg:p-6 flex flex-col gap-5 lg:gap-3">
        <h2 className="font-bold text-6xl lg:text-2xl">Sagar Pal</h2>
        <p className="text-3xl lg:text-base">
          Welcome! I'm Sagar Pal, an engineering student fueled by curiosity and
          a coding enthusiast. I see engineering as a journey of innovation,
          embracing challenges to create unique solutions. From mastering
          concepts to real-world projects, I'm driven by excellence.
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((element, index) => (
            <SkillTag key={index} {...element} />
          ))}
        </div>
      </div>
    </div>
  );
};

function SkillTag({ skillName, emoji, bgColor }) {
  return (
    <span
      className="px-4 lg:px-2 py-2 lg:py-1 text-black rounded-full font-bold text-2xl"
      style={{ backgroundColor: bgColor }}
    >
      {skillName} {emoji}
    </span>
  );
}
export default ProfileCard;
