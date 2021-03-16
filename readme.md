# Git SHA Demonstration

This sample project demonstrates how to import the git SHA of the current project into the code while using the Rowley Crossworks development environment.
To do so you can use the scripting capabilities of the development environment and add the pre-build command

```bash
"$(StudioDir)/bin/crossscript" "load(\"$(ProjectDir)/PreBuild.js\");PreBuild();"
```

This loads the script file PreBuild.js and calls the function PreBuild before the build.

Inside this function we call

```bash
git rev-parse HEAD
```

to get the git-SHA. We have to redirect the result to a file as a direct return of the SHA to the script is not possible. Therefore, we have to read back the contend of the new created file to get the SHA afterwards.
With this value a new Header file can be created which can be used inside the application.
