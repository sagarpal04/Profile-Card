import ProfileCard from "./components/ProfileCard";

const App = () => {
  const skills = [
    { skillName: "HTML + CSS", emoji: "💪", bgColor: "#0077ff" },
    { skillName: "JavaScript", emoji: "💪", bgColor: "#f7df1e" },
    { skillName: "Web Design", emoji: "💪", bgColor: "#3adb76" },
    { skillName: "Git and GitHub", emoji: "👍", bgColor: "#ff4c4c" },
    { skillName: "React", emoji: "💪", bgColor: "#6a5acd" },
    { skillName: "Svelte", emoji: "💥", bgColor: "#ff7f50" },
  ];

  return (
    <div className="h-screen flex justify-center items-center">
      <ProfileCard skills={skills} />
    </div>
  );
};

export default App;
