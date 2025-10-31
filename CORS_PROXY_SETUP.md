# הוראות הגדרת Cloudflare Worker Proxy

## למה צריך Proxy?

Airtable API חוסם בקשות CORS מדפדפנים, ולכן צריך Proxy Server שיעבור דרך השרת (שם אין מגבלות CORS).

## פתרון: Cloudflare Workers (חינמי!)

### שלב 1: יצירת Worker

1. לך ל: https://workers.cloudflare.com/
2. היכנסי עם חשבון Google/GitHub (או צרי חשבון חינמי)
3. לחצי "Create a Worker"

### שלב 2: העתקת הקוד

1. פתחי את הקובץ: `cloudflare-worker-proxy.js`
2. העתקי את כל התוכן
3. הדבקי ב-Cloudflare Workers editor

### שלב 3: הגדרת Secret (הטוקן)

1. ב-Worker editor, לחצי על "Settings" (למעלה)
2. לך ל-"Variables"
3. לחצי "Add variable"
4. Name: `AIRTABLE_TOKEN`
5. Value: הטוקן שלך מ-Airtable
6. לחצי "Save"

### שלב 4: Deploy

1. לחצי "Save and deploy" (למעלה)
2. תקבלי כתובת Worker, למשל: `airtable-proxy.YOUR-USERNAME.workers.dev`

### שלב 5: עדכון הקוד ב-GitHub

1. פתחי את `align.html`
2. מצאי את השורה:
   ```javascript
   PROXY_URL: null
   ```
3. החלפי ל:
   ```javascript
   PROXY_URL: 'https://YOUR-WORKER-URL.workers.dev'
   ```
   (החלפי את `YOUR-WORKER-URL` בכתובת ה-Worker שקיבלת)

4. Commit ו-Push:
   ```bash
   git add align.html
   git commit -m "Add Cloudflare Worker proxy URL"
   git push
   ```

## איך זה עובד?

- הדפדפן שולח בקשה ל-Cloudflare Worker (אין בעיות CORS)
- ה-Worker שולח בקשה ל-Airtable עם הטוקן (מהצד של השרת - אין בעיות CORS)
- ה-Worker מחזיר את התוצאה לדפדפן

## חלופות:

אם את לא רוצה להשתמש ב-Cloudflare Workers:
- **Vercel Functions** - דומה, גם חינמי
- **Netlify Functions** - גם חינמי
- **AWS Lambda** - מורכב יותר

## בדיקה:

אחרי שהגדרת את ה-PROXY_URL, רענני את האתר. אם הכל עובד, תראי את הנתונים במקום שגיאת CORS!

