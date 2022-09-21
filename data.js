// https://zetcode.com/all/#js
const url = "https://jsonplaceholder.typicode.com/comments";
const postId = Number(prompt("Enter postId"));
const details = prompt("Enter details");
const email = prompt("Enter email");
const id = Number(prompt("Enter id"));
const name = prompt("Enter name");

fetch(url, {
  method: "POST",

  body: JSON.stringify({
    body: details,
    email: email,
    id: id,
    name: name,
    postId: postId,
  }),

  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));

//same result
// async function funcName(url) {
//   const response = await fetch(url);
//   var data = await response.json();
//   console.log(data);
// }
// funcName(url);
