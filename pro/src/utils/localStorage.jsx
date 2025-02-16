
const Employee = [
  {
    "id": 1,
    "firstName": "Ayushi",
    "email": "ayushi.sharma@example.com",
    "password": "123",
    "taskCount": 2, // Total task count
    "tasks": [
      {
        "taskTitle": "Design Login Page",
        "taskDescription": "Create a modern UI/UX for the login page",
        "taskDate": "2024-02-15",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false
      },
      {
        "taskTitle": "Fix Navbar Issues",
        "taskDescription": "Resolve navigation bar alignment issues",
        "taskDate": "2024-02-18",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false
      }
    ],
    "activeTasks": 2,
    "newTasks": 1,
    "completedTasks": 0
  },
  {
    "id": 2,
    "firstName": "Rahul",
    "email": "rahul.verma@example.com",
    "password": "123",
    "taskCount": 2,
    "tasks": [
      {
        "taskTitle": "Implement Authentication",
        "taskDescription": "Secure user login and registration",
        "taskDate": "2024-02-16",
        "category": "Security",
        "active": true,
        "newTask": true,
        "completed": false
      },
      {
        "taskTitle": "Database Optimization",
        "taskDescription": "Optimize database queries for performance",
        "taskDate": "2024-02-22",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": true
      }
    ],
    "activeTasks": 1,
    "newTasks": 1,
    "completedTasks": 3
  }
];

// Generate additional 15 employees dynamically (Indian Names)
const firstNames = ["Rohan", "Sanya", "Kabir", "Megha", "Amit", "Pooja", "Arjun", "Tanya", "Anil", "Simran"];
const lastNames = ["Sharma", "Verma", "Kapoor", "Patel", "Mishra", "Gupta", "Joshi", "Malhotra", "Singh", "Agarwal"];

for (let i = 3; i <= 20; i++) {
const firstName = firstNames[i % firstNames.length];
const lastName = lastNames[i % lastNames.length];
const taskList = [
  {
    "taskTitle": `Task for ${firstName}`,
    "taskDescription": `Assigned task for ${firstName}`,
    "taskDate": `2024-02-${10 + (i % 10)}`,
    "category": ["Development", "Design", "Testing", "Security", "DevOps", "Deployment"][i % 6],
    "active": Math.random() < 0.5,
    "newTask": Math.random() < 0.5,
    "completed": Math.random() < 0.5
  },
  {
    "taskTitle": `Additional Task for ${firstName}`,
    "taskDescription": `Second assigned task for ${firstName}`,
    "taskDate": `2024-02-${15 + (i % 10)}`,
    "category": ["Development", "Design", "Testing", "Security", "DevOps", "Deployment"][(i + 2) % 6],
    "active": Math.random() < 0.5,
    "newTask": Math.random() < 0.5,
    "completed": Math.random() < 0.5
  }
];

const activeCount = taskList.filter(t => t.active).length;
const newCount = taskList.filter(t => t.newTask).length;
const completedCount = taskList.filter(t => t.completed).length;

Employee.push({
  "id": i,
  "firstName": firstName,
  "email": `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
  "password": "123",
  "taskCount": taskList.length,
  "tasks": taskList,
  "activeTasks": activeCount,
  "newTasks": newCount,
  "completedTasks": completedCount
});
}

// Admin Data (Indian Names)
const Admin = [
{
  "id": 1,
  "firstName": "Raj",
  "email": "admin@company.com",
  "password": "123"
},
{
  "id": 2,
  "firstName": "Neha",
  "email": "manager@company.com",
  "password": "123"
}
];

/**
* Saves employee & admin data to local storage
*/
export const setLocalStorage = () => {
localStorage.setItem("employee", JSON.stringify(Employee));
localStorage.setItem("admin", JSON.stringify(Admin));
};

/**
* Retrieves data from local storage
* @returns {object} - Parsed local storage data
*/
export const getLocalStorage = () => {
const employeeData = localStorage.getItem("employee");
const adminData = localStorage.getItem("admin");

return {
  employees: employeeData ? JSON.parse(employeeData) : Employee,
  admin: adminData ? JSON.parse(adminData) : Admin,
};
};

export { Employee, Admin };
