import { useState, useEffect } from "react";

type SkillsProps = {
  skills: string[];
};

const Skills = ({ skills }: SkillsProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1000);
  }, []);

  return (
    <>
      <ul>
        {skills?.map((skill: string) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};

export default Skills;
