const DogsArr = [
  { Name: "Johnny", Breed: "Labrador", Type: "Retriever", Numbers: [1, 2, 3] },
  {
    Name: "Rocky",
    Breed: "Golden Retriver",
    Type: "Retriever",
    Numbers: [2, 4, 6],
  },
  { Name: "Sunny", Breed: "Chesapeake", Type: "Retriever", Numbers: [3, 6, 9] },
  { Name: "Rex", Breed: "Pitbull", Type: "Terrier", Numbers: [4, 5, 6] },
  { Name: "Bone", Breed: "Schnauzer", Type: "Terrier", Numbers: [5, 6, 7] },
  { Name: "Aurora", Breed: "Airedale", Type: "Terrier", Numbers: [6, 7, 8] },
];
DogsArr.forEach((DogsArr) => console.log(DogsArr.Name));
DogsArr.forEach((DogsArr) => console.log(DogsArr.Numbers));
const result = DogsArr.filter((DogsArr) => DogsArr.Type === "Terrier");

console.log(result);
