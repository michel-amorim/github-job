const BaseURL = "https://jobs.github.com/api";

async function Api(route: string, method = "GET", data = null) {
  let json = null;
  if (data) {
    json = JSON.stringify(data);
  }
  const response = await fetch(BaseURL + route, {
    method: method,
    body: json,
  });

  return response.json();
}

export default Api;
