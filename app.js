const createmanagers = require('./crud-operation/create');
const readmanagers = require('./crud-operation/read');
const updatemanagers = require('./crud-operation/update');
const deletemanagers = require('./crud-operation/delete');

//creat operation

createmanagers('Prasad', 21,'Devloper');
// createmanagers('Dipali', 21,'Tester');
// createmanagers('Saryu', 21,'programer');
// createmanagers('ram', 18,'project Analyst');
// createmanagers('jit', 23,'Project manager');


// readmanagers();

// updatemanagers({ name: 'Prasad' }, { role : "Data_analyst" });

// updatemanagers({ age:21 }, { $set: { age: 20 } });

// deletemanagers() 

// deletemanagers({name:'jit'});
