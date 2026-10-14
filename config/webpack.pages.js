const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPages('./src/index.html', './index.html', ['index']),
  createPages('./src/pages/game.html', './game.html', ['index', 'game']),
  createPages('./src/pages/form-react.html', './form-react.html', ['index','form-react']),
]


module.exports = htmlPages
