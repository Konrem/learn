Основні команди

git switch -c <branch>
git switch <branch>
git merge <branch>
git status
git add .
git commit
git log --oneline --graph --all


Причина конфлікту
Конфлікт виник тому, що дві branches змінили один і той самий рядок файлу `conflict-demo.md` по-різному.

Conflict markers

<<<<<<< HEAD
версія поточної branch

=======
версія branch, яку merge-имо

>>>>>>> branch