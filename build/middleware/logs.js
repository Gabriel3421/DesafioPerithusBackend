module.exports = async (req, res, next) => {
  console.log(
    'Request logged:',
    'Method:',
    req.method,
    'Path:',
    req.path,
    'Query:',
    req.query,
    'Body:',
    req.body,
    'Params:',
    req.params
  );
  return next();
};
