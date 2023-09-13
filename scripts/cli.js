const command = process.argv[2];

const url = "http://localhost:3000/api/v1/data";

switch (command) {
  case "create":
    create();
    break;
  case "list":
    list();
    break;
  default:
    console.log(
      "Use `create <dto>` to insert an object and `list` to view the objects"
    );
}

async function create() {
  const dto = process.argv[3];
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: dto,
  });
  const json = await response.text();
  console.log(json);
}

async function list() {
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const { results } = await response.json();
  console.table(results);
}
