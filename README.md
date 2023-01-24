# nodejs_gmp_hws
Learning node js

# installation
run npm install

# run each task individually for module1
1) npm run task1
2) npm run task2

# optional
You can run 'npm run task1-modified' to test the task1 implementation
that is using 'readline' package

# home work 1

# BASICS. NODEJS FUNDAMENTAL THEORY
# PREREQUISITES:
    1.Install the latest LTS(Long Term Support) version of Node.js(https://nodejs.org/en/), by any available means (.exe, nvm, brew, etc.).
    2.Check in the console (terminal) that the Node.js installation was done properly by running the following commands node -vor node -version.
    3.Create a repo for your homework tasks on Github (https://github.com/)or git.epam.com.
    4.Provide your mentor with the link to the repo and add read access permissions.
    5.Create package.json by running the following commands npm initor npm init -y.
    6.Install globally or locally npmpackage nodemon(https://github.com/remy/nodemon)to dev dependency.
    7.Get ready to watch the lectures and do the homework tasks to study the basic principles and approaches of development server-side applications with Node.js.

# TASK 1.1
    Write a program which reads a string from the standard input stdin, reverses it and then writes it to the standard output stdout.
        • The program should be started from npmscript via nodemon(i.e. npm run task1).
        • The program should be running in a stand-by mode and should not be terminated after the first-stringprocessing.
        • For example:
            input : 12345 678
            output: 876 54321
            input: test data
            output: atad tset

# TASK 1.2
    Write a program which should do the following:
        • Read the content of csvfile from./csvdirectory.
        • Use the csvtojsonpackage (https://github.com/Keyang/node-csvtojson) to convert csvfile to jsonobject.
        • Write the csvfile content to a new txtfile.
        • Do not load all the content of the csvfile into RAM via stream (read/write file content line by line).
        • In case of read/write errors, log them in the console.
        • The program should be started via npm scriptusing nodemon(i.e. npm run task2).

# TASK 1.3 
    Rewrite the above-mentionedprograms to use babel(https://babeljs.io/)and ES6modules.

# EVALUATION CRITERIA
    2. Task 1.1 is fulfilled to the full extent.
    3. Task 1.2 is fulfilled to the full extent; the file is loaded fully into the RAM.
    4. Task 1.2is fulfilled to the full extent; the file is not loaded fully in the RAM (pipeline method https://nodejs.org/api/stream.html#stream_stream_pipeline_streams_callback).
    5. All the tasks are fulfilled to the full extent (Task 1.1,Task 1.2,Task 1.3).