export const onRequest: PagesFunction = async (context) => {
    const response = await context.next();
    response.headers.set('Access-Control-Allow-Origin', 'https://ustmakerweb.zeddevstuff.dev');
    response.headers.set('Access-Control-Max-Age', '86400');
    return response;
};