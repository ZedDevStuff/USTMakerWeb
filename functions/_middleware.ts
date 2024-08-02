// Respond to OPTIONS method
export const onRequestOptions: PagesFunction = async () => {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': 'ustmakerweb.zeddevstuff.dev',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Max-Age': '86400',
      },
    });
  };
  
  // Set CORS to all /api responses
  export const onRequest: PagesFunction = async (context) => {
    const response = await context.next();
    response.headers.set('Access-Control-Allow-Origin', 'ustmakerweb.zeddevstuff.dev');
    response.headers.set('Access-Control-Max-Age', '86400');
    return response;
  };