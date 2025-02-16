const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end(`<!DOCTYPE html>
        <html>
        <head>
            <style>
                #table1 {
                    border: antiquewhite solid 2px;
                    width: 50%;
                }
                #data2{
                    color: blue;
                    font-size: 23px;
                    font-weight: bold;
                    text-align: left;
                }
                .row1 td{
                }
                .row2 input{
                    size: 20px;
                }
                .row2 td{
                    padding-top: 20px;
                    padding-left: 10px;
                    padding-bottom: 15px;
                }
                #button1{
                    text-align: center;
                    color: black;
                    background-color: brown;
                    border: 0;
                    width: 70%;
                    font-size: 17px;
                }
                #button2{
                    text-align: center;
                    width: 100%;
                }
                .footer{
                    padding-top: 50px;
                    background-color: burlywood;
                    widht: 100%;
                    text-align: center;
                }
                #table2{
                    background-color: burlywood;
                    width: 100%;
                }
            </style>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Question 1</title>
        </head>
        <body>
        <form>
            <table id="table1" align="center">
                <tr class="row1">
                    <td colspan="2" style="width: 50%"> 
                        <img src="miitlogo.jpg" width="150px" style="padding-left: 150px;">
                    </td>
                    <td id="data2">
                        Myanmar Institute of<br>
                        Information Technology
                    </td>
                </td>
                </tr>
                <tr class="row2">
                    <td>
                        <input type="text" placeholder="Username">
                        <br><br>
                        <input type="text" placeholder="Password">
                        <br><br>
                        <input type="checkbox"><b>Remember Username</b>
                        <br><br>
                        <button id="button1">Log in
                    </td>
                    <td class="row2_data2">
                        <a href="2019-miit-cse-012-q2.html" 
                        style="text-decoration: none; color: black;">Forgot your username or password?</a>
                        <p>Cookies must be enable in your browser?</p>
                        <p>Some courses may allow guest access</p>
                        <button id="button2">Log in as guest
                    </td>
                </tr>
            </table>
        </form>
        <br><br><br>
        <table id="table2">
            <tr>
                <td style="text-align: center; color: white;">
                    <p>You are not logged in</p>
                    <a href=# style=" color: white;">Home</a>
                    <br>
                    <a href=# style=" color: white;">Get the mobile app</a>
                </td>
            </tr>
        </table>
        </body>
        </html>`)
  } else if (req.url === '/about') {
    res.end('Here is our short history')
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  }
})

server.listen(5000)