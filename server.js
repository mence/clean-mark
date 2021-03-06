
const { json } = require('micro')
const clean = require('./lib/clean')

module.exports = async function (req, res) {
  const data = await json(req)
  const md = await clean(data.url)
  return md
}
