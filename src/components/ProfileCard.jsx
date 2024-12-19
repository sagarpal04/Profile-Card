import UserImage from "../images/profileImage.jpg";
import PropTypes from "prop-types";
const ProfileCard = ({ skills }) => {
  return (
    <div className="border-black border-4 w-[80%] lg:w-[30%] mt-14 rounded-lg">
      <div className="h-[700px] lg:h-80 overflow-hidden rounded-t-sm">
        <img
          src={UserImage}
          className="w-full h-full object-cover"
          alt="User Image"
        />
      </div>
      <div className="p-6 flex flex-col gap-10 lg:gap-3">
        <h2 className="font-bold text-6xl lg:text-xl">Sagar Pal</h2>
        <p className="text-4xl lg:text-base">
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
      className="font-bold p-3 lg:p-1 text-2xl lg:text-base rounded-lg"
      style={{ backgroundColor: bgColor }}
    >
      {skillName} {emoji}
    </span>
  );
}
export default ProfileCard;
