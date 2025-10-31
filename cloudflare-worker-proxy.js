/**
 * Cloudflare Worker Proxy for Airtable API
 * 
 * הוראות התקנה:
 * 1. לך ל: https://workers.cloudflare.com/
 * 2. צור Worker חדש
 * 3. העתק את הקוד הזה
 * 4. הוסף Secret בשם AIRTABLE_TOKEN ב-Settings → Variables
 * 5. Deploy
 */

export default {
  async fetch(request, env) {
    // בדוק שהבקשה היא GET (אפשר להוסיף POST אם צריך)
    if (request.method !== 'GET' && request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    // קבל את ה-URL מה-query parameter
    const url = new URL(request.url);
    const targetUrl = url.searchParams.get('url');
    
    if (!targetUrl) {
      return new Response('Missing "url" parameter', { status: 400 });
    }

    // קבל את הטוקן מ-Secrets (Cloudflare Workers Secrets)
    const token = env.AIRTABLE_TOKEN;
    
    if (!token) {
      return new Response('AIRTABLE_TOKEN not configured', { status: 500 });
    }

    try {
      // העתק headers מהבקשה המקורית (אבל לא Authorization)
      const headers = new Headers();
      
      // הוסף Authorization header עם הטוקן
      headers.set('Authorization', `Bearer ${token}`);
      headers.set('Content-Type', 'application/json');

      // בצע את הבקשה ל-Airtable
      const response = await fetch(targetUrl, {
        method: request.method,
        headers: headers,
        body: request.method === 'POST' ? await request.clone().body : null,
      });

      // העתק את התגובה
      const data = await response.text();
      
      // החזר את התגובה עם CORS headers
      return new Response(data, {
        status: response.status,
        statusText: response.statusText,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    } catch (error) {
      return new Response(`Proxy error: ${error.message}`, { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      });
    }
  },
};

