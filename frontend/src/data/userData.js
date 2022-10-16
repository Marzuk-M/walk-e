// const data = [
//   {
//     username: "marzook",
//     email: "marzukmashrafe2@gmail.com",
//     profilePicture: "images/idk.png",
//     bio: "Hello",
//     challenges: {
//       completed: 0,
//       completedToday: 0,
//       streak: 0,
//       points: 0,
//     },
//     rank: {
//       global: 1,
//     },
//   },
// ];

// Creates 5 different users
const userData = [1, 2, 3, 4, 5].map((num) => {
  return {
    username: "marzook" + num,
    email: "marzukmashrafe2@gmail.com",
    profilePicture: "images/idk.png",
    bio: "Hello",
    challenges: {
      totalCompleted: 0,
      completedToday: 0,
      streak: 0,
      points: 0,
    },
    rank: {
      global: num,  
    },
  };
});

export default userData;
