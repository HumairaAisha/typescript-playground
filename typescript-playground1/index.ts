
const profile1 = {
   name: "Humaira",
   role: "Frontend Engineer",
   yearsOfExperience : 5,
   skill: ["JavaScript", "React", "TailwindCss", "Git", "Vs code"],
   focus: "TypeScript",
   openTowork : true,
   projects: [
      {name: "Sandbox", technology: "React", status: "Complete"},
      {name: "portfolio", technology: "Typescript", status: "complete"},
   ]
}

profile1.name = "Riyya"
profile1.skill.push("TypeScript")


console.log(profile1.name);
console.log(profile1.skill);
console.log(profile1.yearsOfExperience);
console.log(profile1.projects);



