// Data
const contacts = [
  { name: "Maya", phone: "071-234-5678", email: "maya@email.com" },
  { name: "Thabo", phone: "072-987-6543", email: "thabo@email.com" },
  { name: "Andlina", phone: "073-555-1212", email: "andlina@email.com" },
];
//Target UL
const contactListEl = document.getElementById("contactList");
// 3. Loop and add items
contacts.forEach(function (contact) {
  let li = document.createElement("li");
  // create <li>
  li.innerHTML = `
    <strong>${contact.name}</strong><br>
    📞 ${contact.phone}<br>
    📧 ${contact.email}
  `;

  li.className = "list-group-item"; // Bootstrap style
  contactListEl.appendChild(li); // attach to UL
});
