export function updateStatus({response, request, database}){
  const { id } = request.params;
  const { solution } = request.body;

  database.update('tickets', id, {
    status: 'closed',
    updated_at: new Date(),
    solution
  });


  return response.end("OK")
}