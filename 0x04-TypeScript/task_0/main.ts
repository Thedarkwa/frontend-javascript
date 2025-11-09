// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Kelvin",
  lastName: "Ofori",
  age: 22,
  location: "Koforidua",
};

const student2: Student = {
  firstName: "Ama",
  lastName: "Boateng",
  age: 20,
  location: "Accra",
};

// Create an array containing the students
const studentsList: Student[] = [student1, student2];

// Render a table in vanilla JS
const table = document.createElement("table");
const tableHead = document.createElement("thead");
const headerRow = document.createElement("tr");

// Define table headers
const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";

const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";

// Append headers to table
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
tableHead.appendChild(headerRow);
table.appendChild(tableHead);

// Create table body
const tableBody = document.createElement("tbody");

// Loop through students and create rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

// Append the body to the table
table.appendChild(tableBody);

// Add some basic styles (optional)
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";
table.querySelectorAll("td, th").forEach((cell) => {
  (cell as HTMLTableCellElement).style.border = "1px solid gray";
  (cell as HTMLTableCellElement).style.padding = "8px";
});

// Append the table to the document body
document.body.appendChild(table);

