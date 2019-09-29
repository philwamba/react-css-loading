const { createElement } = require('react')
const express = require('express')
const { renderToString } = require('react-dom/server')
const { Ring } = require('react-css-loading')

const port = 3000
const app = express()

app.get('*', (req, res) => {
  const html = renderToString(createElement(Ring))

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body style="background-color: #000;">
        ${html}
    </body>
    </html>
  `)
})

app.listen(port, () =>
  console.log(`Server started at http://localhost:${port}`)
)
