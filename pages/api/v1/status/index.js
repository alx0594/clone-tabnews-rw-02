import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);

  response.status(200).json({
    database: {
      dependencies: {
        version: "16.0",
        max_connetions: 100,
        opened_connections: 1,
      },
    },
  });
}

export default status;
