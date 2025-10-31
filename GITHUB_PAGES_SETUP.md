# הוראות הגדרת GitHub Pages

## ⚠️ חשוב: הבעיה העיקרית - הגדרות Pages

אם את רואה 404, זה אומר שהגדרות GitHub Pages לא מוגדרות נכון!

## שלבים להגדרה:

### 1. הגדרת Source ב-GitHub Pages:

1. לך ל: `https://github.com/Oriya3/alignment/settings/pages`
2. תחת **"Source"**, בחר: **"GitHub Actions"** (לא "Deploy from a branch"!)
3. שמירה - זה הכל!

### 2. ודאי שה-Secret מוגדר:

1. לך ל: `https://github.com/Oriya3/alignment/settings/secrets/actions`
2. ודאי שיש Secret בשם: **`AIRTABLE_TOKEN`**
3. אם אין - לחצי "New repository secret" והוסף אותו

### 3. בדוק את ה-workflow:

1. לך ל: `https://github.com/Oriya3/alignment/actions`
2. ודא שה-workflow "Deploy to GitHub Pages" רץ בהצלחה (✅)
3. אם הוא נכשל (❌) - לחצי עליו ובדוק את הלוגים

### 4. הכתובת של האתר:

לאחר שה-deployment מסתיים, האתר יהיה זמין ב:
- `https://oriya3.github.io/alignment/` (דף ראשי)
- `https://oriya3.github.io/alignment/align.html` (דף ישיר)

---

## אם זה עדיין לא עובד:

1. **חכי 5-10 דקות** - לפעמים לוקח זמן עד שהדומיין מתעדכן
2. **נסי למחוק את ה-cache של הדפדפן** (Ctrl+Shift+Delete או Cmd+Shift+Delete)
3. **בדוק את הלוגים של ה-workflow** - אם יש שגיאה, תראי אותה שם

