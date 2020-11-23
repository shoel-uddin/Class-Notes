import { ajax } from "./ajax.js";

const root = document.querySelector("#root");
const makeCard = (person) => {
  let card = document.createElement("div");

  let name = document.createElement("h3");
  name.innerText = `${person.name.first} ${person.name.last}`;

  let phone = document.createElement("p");
  phone.innerText = person.phone;
  phone.className = "phone";

  let remove = document.createElement("button");
  remove.innerText = "X";
  remove.addEventListener("click", (evt) => {
    console.dir(evt.target);
    evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
  });

  card.append(name, phone, remove);
  root.append(card);
};
ajax("https://randomuser.me/api/", (res) => {
  let r = JSON.parse(res);
  console.log(r)
  r.results.forEach((person) => {
    makeCard(person);
    console.log(person)
  });
});
