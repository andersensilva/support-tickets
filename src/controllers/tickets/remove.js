export function remove({ request, response, database }) {
  const { id } = request.params;

  // Remove the ticket from the database
  database.delete('tickets', id);

  // Respond with a success status
  return response.writeHead(204).end();
}