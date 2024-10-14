const {Test} = require("../../../../database/models")

export async function GET(request, context) {

  const employee = context.params.employee;

  const item = await Test.findByPk(employee);

  return Response.json(item);
  
}
 
export async function HEAD(request) {}
 
export async function POST(request) {}
 
export async function PUT(request) {}
 
export async function DELETE(request) {}
 
export async function PATCH(request) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request) {}