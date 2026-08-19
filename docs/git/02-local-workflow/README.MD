Working tree
Файли, які ти зараз редагуєш локально.

Staging area
Проміжна область для змін перед комітом (git add).

Repository
Історія всіх закомічених змін у Git.

Основні команди
git status - перевірити стан
git add . - додати зміни
git commit -m "msg" - створити коміт
git push - відправити зміни

Безпечне скасування локальних змін
git restore file — скасувати зміни у файлі
git restore --staged file — прибрати файл зі staging
git revert <commit> — безпечно скасувати коміт


git diff
- перший раз нічого не показав, бо не відстежував файл
- другий раз(як додав файл комітом і вніс зміни) нічого не показав
- під час другого разу git diff --staged:
diff --git a/docs/git/02-local-workflow/example.txt b/docs/git/02-local-workflow/example.txt
index a4e1be6..b464892 100644
--- a/docs/git/02-local-workflow/example.txt
+++ b/docs/git/02-local-workflow/example.txt
@@ -1 +1,2 @@
-hello world.
\ No newline at end of file
+hello world.
+Second line
\ No newline at end of file


git diff - зміни у Working tree, які ще не додані через git add.
git diff --staged - зміни, які вже знаходяться у Staging area і підуть у наступний commit.

Третій рядок:
git diff:
index b464892..7faa769 100644
--- a/docs/git/02-local-workflow/example.txt
+++ b/docs/git/02-local-workflow/example.txt
@@ -1,2 +1,3 @@
 hello world.
-Second line
\ No newline at end of file
+Second line
+temporary line
\ No newline at end of file




Git дозволяє працювати зі змінами у три основні етапи:
Working tree → Staging area → Repository.

git diff - використовується для перегляду незастейджених змін
git diff --staged — для перегляду змін, підготовлених до commit
git restore дозволяє безпечно скасувати локальні зміни, які ще не були закомічені.