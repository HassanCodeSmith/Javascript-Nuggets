// dot notation
const person = {
  name: "jhon",
};
console.log(person.name);

person.age = 25;
console.log(person);

// square bracket notation
const items = {
  "featured-items": ["item1", "item2"],
};

console.log(items["featured-items"]);
console.log(person["name"]);

let appStatus = "loading";
appStatus = "error";

const app = {
  [appStatus]: true,
};

// console.log(app.loading); // true
// console.log(app["loading"]); // true
// console.log(app[appStatus]); // true

const keyName = "computer";
app[keyName] = "apple";
console.log(app);

const state = {
  loading: true,
  name: "",
  job: "",
};

function updateState(key, value) {
  state[key] = value;
}

updateState("name", "jhon");
updateState("job", "developer");
updateState("loading", false);

updateState("products", []);
updateState("name", "peter");

console.log(state);
