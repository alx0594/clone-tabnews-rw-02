test("GET to /api/v1/status should return status code 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  console.log(responseBody.database.dependencies.version);

  expect(responseBody.update_at).toBeDefined();

  expect(responseBody.database.dependencies.version).toEqual("16.8");

  expect(responseBody.database.dependencies.max_connections).toEqual("100");

  expect(responseBody.database.dependencies.opened_connections).toEqual(1);
});
