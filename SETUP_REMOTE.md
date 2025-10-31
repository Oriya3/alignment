# הוראות חיבור ל-GitHub Remote

## שלב 1: מצאי את כתובת ה-Repository ב-GitHub

1. לכי ל-repository שלך ב-GitHub
2. לחצי על כפתור ירוק "Code" (בחלק העליון)
3. תעתקי את ה-URL (HTTPS או SSH)

## שלב 2: קישור ל-Remote

הפעילי את הפקודות הבאות בטרמינל:

```bash
cd /Users/oriya/Documents/Alignment

# הוסף את ה-remote (החלפי את <YOUR_REPO_URL> בכתובת האמיתית)
git remote add origin https://github.com/Oriya3/alignment.git

# למשל, אם הכתובת שלך היא:
# git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
# או
# git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
```

## שלב 3: משיכת הקוד הקיים

```bash
# משוך את הקוד מה-remote
git fetch origin

# בדוק איזה branch יש ב-remote (כנראה main או master)
git branch -r

# הוסף את כל הקבצים המקומיים
git add .

# commit את השינויים המקומיים
git commit -m "Initial commit from local"

# עבור אל ה-branch הראשי (main או master - תלוי מה יש ב-remote)
git checkout -b main origin/main 2>/dev/null || git checkout -b master origin/master 2>/dev/null || git checkout -b main

# משוך את כל השינויים מה-remote (merge)
git pull origin main --allow-unrelated-histories || git pull origin master --allow-unrelated-histories
```

## שלב 4: שליחת השינויים

```bash
# שלח את השינויים ל-remote
git push -u origin main  # או master אם זה השם
```

## בדיקה

```bash
# בדוק שה-remote קשור
git remote -v

# בדוק את הסטטוס
git status
```

