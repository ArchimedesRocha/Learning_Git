### :dart: About Learning_Git
* The goal is to learn about git commands and put them into practice, after all i'm starting =)


### :bookmark_tabs: Types of commits applied
* chore   - Code insertion at some point in the application, which is neither a feature nor a fix.
* fix     - Applied when there is bug resolution
* feature - Addition of some functionality

### :hammer: Tools used
* Yarn
* Node.js
* Git

### :hotsprings: Commands executed
* git add .						
###### Adds all modified files

* git add "NAME-THE-ARCHIVE"		
###### Adds a single file

* git config --global user.name "YOUR-NAME"
###### Here you inform your name

* git config --global user.email "YOUR-E-MAIL"
###### Here you inform your e-mail

* git log
###### To check all commit's

* git log --author = "AUTHOR-NAME"
###### To check a user's commit's

* git shortlog
###### Show all commits in alphabetic order

* git shortlog -sn "LOG-NAME"
###### Show commit by name

* git diff
###### Shows all changes made to the project

* git reset --soft
###### Undo a commit and the committed files are about to commit again

* git reset --mixed
###### Undoes a commit and also adding the files to be committed

* git reset --hard
###### Delete the commit

* git revert
###### Revert a ultima ação realizada no commit

* git status						
###### Shows the status of files added before committing.

* git commit -m "COMMENT"				
###### Save files to be sent to the remote directory | "-m" allows you to add a comment.

* git pull
###### Get any changes made to the remote repository and download them to the local repository

* git rebase
###### There are many variations for this command, where it is possible to go back to a commit, after going back, go to another commit, and edit commits, among other things.

* git remote add origin NAME-REMONE-REPOSITORY		
###### Add the remote repository to send our files in the future | "origin" can be changed to a name of your choice.

* git remote remove origin URL-REPOSITORY		
###### Removes the remote repository.

* git push -u origin NOME-DO-BRANCH			
###### Send files that have been committed to the remote repository within the "brach" you entered | "-u" is to inform that the brach will be standard, so after this command the next "push" you will only need to inform "git push" and not "git push -u origin NAME-DO-BRANCH".

* git clone URL-REPOSITORIO-REMOTO			
###### Clone a remote repository

* git log						
###### Show the log

* git checkout -b feature/courses-page
###### Create a new branch via "-b" and "checkout" enters this newly created branch, "checkout" is used to move between branches.

* git remote -v						
###### We view the remote repository, which in our case we define as "origin"

* git push origin feature/courses-page			
###### This procedure is called a "pull request" which will insert our new feature/courses-page into our master repository, through a commit.

* git pull
###### Download file updates for the current branch, after this you will be able to merge.

* git merge						
###### Directly insert modifications made to the feature / courses-page branch within the master branch.

* Comment one:
###### About pull request - After the "pull request" procedure, github will detect a new branch and ask you if you want to open a new code request within the "master repository", after accepting it will be possible to view the entire code that has been changed and you can click on "create a pull request".

* Comment two:
###### About pull request - After creating the pull request, it will be possible for other developers to review your code, you will also have the option to choose someone for this task, after your code is reviewed it must be approved and after that you or your reviewer can give a "merge" to join the branch code "feature / courses-page" with the branch master code.


#### :pushpin: Questions

* When to create a new commit?
###### Usually when we finish something that will positively impact the application, regardless of whether the code part is large or small, what matters is the positive impact.

* When to create a new branch?
###### When I need to work on a new feature independent of my application that is in production, it is not recommended to work on the master branch.

* Can we delete the branches after applying the changes to the master?
###### Yes, it is a good practice that after we implement it in the master, the branches referring to this feature are deleted.
