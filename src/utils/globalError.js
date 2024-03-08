let mode = "dev"

export let globalError = (err, req, res, next) => {
  mode == "dev" ? devMood(err, res) : prodMood(err, res)
}

let prodMood = (err, res) => {
  let code = err.statusCode || 500;
  res.status(code).json({ message: err.message, statusCode: code })
}
let devMood = (err, res) => {
  let code = err.statusCode || 500;
  res.status(code).json({ message: err.message, statusCode: code, stack: err.stack })
}