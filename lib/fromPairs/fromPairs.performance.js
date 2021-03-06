const {
  generators: { getArrays },
  times: { TIMES_1M },
  types: { TYPE_1M },
  utils: { triple }
} = require('../_internal/helpers/performance')

module.exports = function getPairsList() {
  const [big1, big2, big3] = getArrays(TIMES_1M, i => triple([i, 'a']))

  return {
    type: TYPE_1M,
    argss: [
      [big1],
      [big2],
      [big3]
    ]
  }
}
