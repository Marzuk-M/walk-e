const data = [
  {
    id: 1,
    username: "marzook",
    email: "marzukmashrafe2@gmail.com",
    profilePicture: "images/idk.png",
    bio: "Hello",
    challenges: {
      completed: 0,
      completedToday: 0,
      streak: 0,
      points: 0,
    },
    rank: {
      global: 1,
    },
  },
  {
    id: 1,
    username: "marzook",
    email: "marzukmashrafe2@gmail.com",
    profilePicture: "images/idk.png",
    bio: "Hello",
    challenges: {
      completed: 0,
      completedToday: 0,
      streak: 0,
      points: 0,
    },
    rank: {
      global: 1,
    },
  },
  {
    id: 1,
    username: "marzook",
    email: "marzukmashrafe2@gmail.com",
    profilePicture: "images/idk.png",
    bio: "Hello",
    challenges: {
      completed: 0,
      completedToday: 0,
      streak: 0,
      points: 0,
    },
    rank: {
      global: 1,
    },
  },
  {
    id: 1,
    username: "marzook",
    email: "marzukmashrafe2@gmail.com",
    profilePicture: "images/idk.png",
    bio: "Hello",
    challenges: {
      completed: 0,
      completedToday: 0,
      streak: 0,
      points: 0,
    },
    rank: {
      global: 1,
    },
  },
  {
    id: 1,
    username: "marzook",
    email: "marzukmashrafe2@gmail.com",
    profilePicture: "images/idk.png",
    bio: "Hello",
    challenges: {
      completed: 0,
      completedToday: 0,
      streak: 0,
      points: 0,
    },
    rank: {
      global: 1,
    },
  },
{
    id: 1,
    username: "marzook",
    email: "marzukmashrafe2@gmail.com",
    profilePicture: "images/idk.png",
    bio: "Hello",
    challenges: {
      completed: 0,
      completedToday: 0,
      streak: 0,
      points: 0,
    },
    rank: {
      global: 1,
    },
  },
  {
    id: 1,
    username: "marzook",
    email: "marzukmashrafe2@gmail.com",
    profilePicture: "images/idk.png",
    bio: "Hello",
    challenges: {
      completed: 0,
      completedToday: 0,
      streak: 0,
      points: 0,
    },
    rank: {
      global: 1,
    },
  },
  {
    id: 1,
    username: "marzook",
    email: "marzukmashrafe2@gmail.com",
    profilePicture: "images/idk.png",
    bio: "Hello",
    challenges: {
      completed: 0,
      completedToday: 0,
      streak: 0,
      points: 0,
    },
    rank: {
      global: 1,
    },
  },
  {
    id: 1,
    username: "marzook",
    email: "marzukmashrafe2@gmail.com",
    profilePicture: "images/idk.png",
    bio: "Hello",
    challenges: {
      completed: 0,
      completedToday: 0,
      streak: 0,
      points: 0,
    },
    rank: {
      global: 1,
    },
  },
  {
    id: 1,
    username: "marzook",
    email: "marzukmashrafe2@gmail.com",
    profilePicture: "images/idk.png",
    bio: "Hello",
    challenges: {
      completed: 0,
      completedToday: 0,
      streak: 0,
      points: 0,
    },
    rank: {
      global: 1,
    },
  },
  {
    id: 1,
    username: "marzook",
    email: "marzukmashrafe2@gmail.com",
    profilePicture: "images/idk.png",
    bio: "Hello",
    challenges: {
      completed: 0,
      completedToday: 0,
      streak: 0,
      points: 0,
    },
    rank: {
      global: 1,
    },
  },
];

// Creates 5 different users
let arr = [];
for(let i = 0; i < 20; i++) {
  arr.push(Math.floor(Math.random() * 100));  
}


const userData = arr.map((num) => {
  return {
    id: num + 1,
    username: "Human" + num,
    email: "person" + num + "@gmail.com",
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
