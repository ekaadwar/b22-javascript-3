const fetch = require("node-fetch");

fetch("https://jsonplaceholder.typicode.com/users/")
  .then((res) => res.json())
  .then((json) => {
    const result = json.map((x) => x.name);
    console.log(result);
  });
