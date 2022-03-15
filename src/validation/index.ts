const myMiddleware = (req, res, next) => {
    // do some logic with req, res
    // ...
    // advance to the next processing step
    next();
  }