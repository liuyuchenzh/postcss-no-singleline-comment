const postcss = require('postcss')
const MATCH = /^\s*\/\//
module.exports = postcss.plugin('postcss-no-singleline-comment', () => {
  return root => {
    root.walkDecls(decl => {
      if (MATCH.test(decl.prop)) decl.remove()
    })
  }
})
