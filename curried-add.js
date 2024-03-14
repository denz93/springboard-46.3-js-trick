function curriedAdd(total) {
  if (total === undefined) {
    return 0
  }
  return function add (a) {
    if (a === undefined) {
      return total
    }
    total += a
    return add
  }
}

module.exports = { curriedAdd };
