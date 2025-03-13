# buildtw

This is a template for a tiddlywiki plugin project. 

This project should be located in a directory representing the name of the developer (eg dev1),
and this will be used as part of the name for the plugin. As a default the system files 
assume a directory called 'developer' in which this project called 'buildtw' is placed (cloned)
in a directory also called 'buildtw'. Rename these to reflect you and your plugins names.

eg with name dev1 and git repostroy called myproj1, within the tiddlywiki plugins folder create dir structure

tiddlywiki>plugins>dev1/myproj1

now clone your myproj1 repo from dir dev1 then cd into myproj1

The in following files the names will need to be edited to refect the path of your plugin project:

readme.tid
plugin.info
tiddlywiki.files
build/bld.sh
build/demo/tiddlywiki.info
build/demoedit/tiddlywiki.info

with bash the follow command can be used to change the paths these files contain to reflect your directory,

WARNING!!!!! CHECK YOU ARE CURRENTLY IN THE CORRECT DIRECTORY (FOR EXAMPLE myproj1)

find . -type f -not -path '*/.git/*'  -exec sed -i "s|developer/buildtw|$(basename "$(dirname "$PWD")")/$(basename "$PWD")|g" {} + 

Create a subdirectory call 'files'
Place your projects files in the 'files' subdirectory.
