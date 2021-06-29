import React from 'react'
import Home from './pages/Home/index'
import ReactDom from 'react-dom/server'
const express = require("express");

const app = express();

app.get("*", (req, res) => {
  const document = ReactDom.renderToString(<Home></Home>)
  const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ssr</title>
    </head>
    <body>
        <div>
            ${document}
        </div>
    </body>
    </html>`;
  res.send(html);
});
app.listen(8080, () => {
    console.log('服务器启动')
});
