export function index({request, response, database}){
  const { status } = request.query
  console.log(status)
  const filters = status ? { status } : null;
  const tickets = database.select('tickets', filters);

  return response.writeHead(200, {
    "Content-Type": "application/json"
  }).end(JSON.stringify(tickets));
}