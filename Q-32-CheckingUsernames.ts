let currentUsersList = ['Eric', 'Willie', 'Tim', 'Eric', 'Michelle'];
let newUsersList = ['Sarah', 'willie', 'Phil', 'Michelle', 'Iona'];

currentUsersList.forEach((obj) => {
  newUsersList.forEach((obj2) => {
    if (obj.toLowerCase() == obj2.toLowerCase())
      console.log(`Sorry ${obj}, that name is taken.`);
  });
});