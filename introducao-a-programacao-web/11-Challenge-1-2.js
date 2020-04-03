console.clear();
const user = {
  name: "Louan",
  company: {
    name: "GGames",
    color: "Yellow",
    focus: "Programming",
    address: {
      street: "Street somewhere",
      number: "0a",
      neighborhood: "Somewhere",
      city: "São Paulo",
      state: "SP",
      zipcode: "000000-000",
      country: "Brazil"
    }
  }
};
console.log(
  `The company, ${user.company.name}, is located at: ${user.company.address.street}, ${user.company.address.number} - ${user.company.address.neighborhood}, ${user.company.address.city}-${user.company.address.state}, ${user.company.address.zipcode} - ${user.company.address.country}`
);
//
console.log("\n");
const programmers = [
  {
    name: "Louan",
    age: 25,
    technologies: {
      name: "Javascript",
      specialty: "Desktop"
    }
  },
  {
    name: "Lucas",
    age: 25,
    technologies: {
      name: "C++",
      specialty: "Web/Mobile"
    }
  }
];
console.log(
  `User ${programmers[0].name} is ${programmers[0].age} years old and uses ${programmers[0].technologies.name} technology with expertise in ${programmers[0].technologies.specialty}`
);
//https://github.com/Rocketseat/bootcamp-launchbase-desafios-01/blob/master/desafios/01-2-lidando-com-objetos-e-vetores.md
