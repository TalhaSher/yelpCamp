// Catch Async Wrapper Function

module.exports = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch(next);
  };
};
