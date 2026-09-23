
type Role = "Frontend Engineer" | "Backend Engineer" | "Fullstack Engineer"


type Profile = {
   name: string;
   role: Role;
   yearsOfExperience: number;
   skills: string[];
   focus: string;
   openToWork?: boolean;
}

const profile: Profile = {
   name: 'Riyya',
   role: "Frontend Engineer",
   yearsOfExperience: 3,
   skills: ["React", "TypeScript", "JavaScript", "Git"],
   focus: "Typescript",
   openToWork: true,
}


const profile2: Profile = {
   name: "Nurain",
   role: "Fullstack Engineer",
   yearsOfExperience: 5,
   skills: ["React", "Python", "Git", "Rust"],
   focus: "System Design",
}
function describePerson(person: Profile): string {
   let status = ""
   if (person.openToWork) {
      status = "open to work"
   } else {
      status = "currently not open to work"
   }
   return `${person.name} is a ${person.role} with ${person.yearsOfExperience} years of experience, ${status}, and focus now is ${person.focus}`

}

function personPersonel(person:Profile): string {
   let status = ""
   if (person.openToWork) {
      status = "open to work"
   } else {
      status = "currently not open to work"
   }
   return  `${person.name} is a ${person.role}, ${status} with ${person.yearsOfExperience} years of experience and here are the skills mastered ${person.skills.join(", ")}`
}

//console.log(personPersonel(profile2));

//console.log(describePerson(profile));

const team: Profile[] = [profile, profile2]
for (const member of team) {
   console.log(personPersonel(member));
   
}
