# Make a Node API #

1. We have to fork this repository and make our locally clone.
2. We need to create a file with a name server.js
3. Open the terminal and run the command `npm install`, this will create our Node Package Manager.
4. we have to write our first line with the expresion `const express = require("express");`.
5. Initialize the server with the second line `const app = express()`;
6. Now we have to set the port `const port = 9090;`

7. We're going to run our server on port 3000, and add a simple console.log in the callback function. Update your server.js file, calling the app.listen method:


app.listen(port, function () {
    console.log("my application is now listening on port 9090");
});

8. now we can run in our terminal the command `node server.js` and we are going to receive the information wrote in the console.log()`"my application is now listening on port 9090"`
9. To stop the program you should run `crtl + c`.

# POTSMAN 

we are going to use the method GET and set the port 
1. http://localhost:9090 
2. press the button `Send`.
3. you will see the response below in the `response` area.









Get http://localhost:9090/trainees  
