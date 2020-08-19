About Learning_Git, a learning about git commands.

Types of commits applied
*chore   - Code insertion at some point in the application, which is neither a feature nor a fix.
*fix     - Applied when there is bug resolution
*feature - Addition of some functionality

Tools used
* Yarn
* Node.js
* Git

Commands executed					What the command does?
* git add .						Adds all modified files.
* git add "NAME-THE-ARCHIVE"				Adds a single file.
* git status						Shows the status of files added before committing.
* git commit -m "COMMENT"				Save files to be sent to the remote directory | "-m" allows you to add a comment.
* git remote add origin NAME-REMONE-REPOSITORY		Add the remote repository to send our files in the future | "origin" can be changed to a name of your choice.
* git remote remove origin URL-REPOSITORY		Removes the remote repository.
* git push -u origin NOME-DO-BRANCH			Send files that have been committed to the remote repository within the "brach" you entered | "-u" is to inform that the brach will be standard, so after this command the next "push" you will only need to inform "git push" and not "git push -u origin NAME-DO-BRANCH".
* git clone URL-REPOSITORIO-REMOTO			Clone a remote repository
* git log						Show the log
* git checkout -b feature/courses-page			Create a new branch via "-b" and "checkout" enters this newly created branch, "checkout" is used to move between branches
* git remote -v						We view the remote repository, which in our case we define as "origin"
* git push origin feature/courses-page			This procedure is called a "pull request" which will insert our new feature/courses-page into our master repository, through a commit.
* git merge						Directly insert modifications made to the feature / courses-page branch within the master branch.

Comment one:
About pull request - Após o procedimento de "pull request", o github irá detectar um novo branch e irá lhe perguntar se voce deseja abrir uma solicitação de novo codigo dentro do "repositorio master", após aceitar será possível a visualização de todo o codigo que foi alterado e você poderá clicar em "criar a pull request".

Comment two:
About pull request - Após criar a pull request, será possível que outros desenvolvedores revisem o seu código, você tambem terá a opção de escolher alguem para esta tarefa, após o seu codigo ser revisado ele deve ser aprovado e após isso você ou seu revisador poderá dar um "merge" que serve para juntar o codigo do branch "feature/courses-page" com o codigo do "branch master".

Questions
1 - When to create a new commit?
Answer - Usually when we finish something that will positively impact the application, regardless of whether the code part is large or small, what matters is the positive impact.

2 - When to create a new branch?
Answer - When I need to work on a new feature independent of my application that is in production, it is not recommended to work on the master branch.

3 - Can we delete the branches after applying the changes to the master?
Answer - Yes, it is a good practice that after we implement it in the master, the branches referring to this feature are deleted.

Comments
I didn't make the pull request because there was no other dev involved to be able to approve the branch, so I did a merge directly.
It is not advisable to do a merge directly because in addition to not undergoing review, you end up adding all the new branch commits within the master branch, it is not a good practice.
