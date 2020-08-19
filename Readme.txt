About Learning_Git, a learning about git commands.

Types of commits applied
*chore   - Code insertion at some point in the application, which is neither a feature nor a fix.
*fix     - Applied when there is bug resolution
*feature - Addition of some functionality

Tools used
* Yarn
* Node.js
* Git

Commands executed

* git add .						
Adds all modified files.

* git add "NAME-THE-ARCHIVE"		
Adds a single file.

* git status						
Shows the status of files added before committing.

* git commit -m "COMMENT"				
Save files to be sent to the remote directory | "-m" allows you to add a comment.

* git remote add origin NAME-REMONE-REPOSITORY		
Add the remote repository to send our files in the future | "origin" can be changed to a name of your choice.

* git remote remove origin URL-REPOSITORY		
Removes the remote repository.

* git push -u origin NOME-DO-BRANCH			
Send files that have been committed to the remote repository within the "brach" you entered | "-u" is to inform that the brach will be standard, so after this command the next "push" you will only need to inform "git push" and not "git push -u origin NAME-DO-BRANCH".

* git clone URL-REPOSITORIO-REMOTO			
Clone a remote repository

* git log						
Show the log

* git checkout -b feature/courses-page
Create a new branch via "-b" and "checkout" enters this newly created branch, "checkout" is used to move between branches.

* git remote -v						
We view the remote repository, which in our case we define as "origin"

* git push origin feature/courses-page			
This procedure is called a "pull request" which will insert our new feature/courses-page into our master repository, through a commit.

* git merge						
Directly insert modifications made to the feature / courses-page branch within the master branch.

Comment one:
About pull request - After the "pull request" procedure, github will detect a new branch and ask you if you want to open a new code request within the "master repository", after accepting it will be possible to view the entire code that has been changed and you can click on "create a pull request".

Comment two:
About pull request - After creating the pull request, it will be possible for other developers to review your code, you will also have the option to choose someone for this task, after your code is reviewed it must be approved and after that you or your reviewer can give a "merge" to join the branch code "feature / courses-page" with the branch master code.

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
