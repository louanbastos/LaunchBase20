console.clear();
const users = [
  {
    name: "Carlos",
    technologies: ["HTML", "CSS"],
  },
  {
    name: "Jasmine",
    technologies: ["Javascript", "CSS"],
  },
  {
    name: "Tuane",
    technologies: ["HTML", "Node.js"],
  },
];

for (let user of users) {
  console.log(`${user.name} works with ${user.technologies.join(", ")}`);
}

function checksIfTheUserUsesCSS(user) {
  for (let technology of user.technologies) {
    if (technology === "CSS") return true;
  }
  return false;
}
for (i = 0; i < users.length; i++) {
  const worksWithCSS = checksIfTheUserUsesCSS(users[i]);
  if (worksWithCSS) {
    console.log(`The user ${users[i].name} works with CSS`);
  }
}
