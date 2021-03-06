export default {
  /**
   * Converts an asynchronous function to return a promise.
   *
   * Use currying to return a function returning a Promise that calls the
   * original function. Use the ...rest operator to pass in all the parameters.
   */
  promisify: func => (...args) => new Promise((resolve, reject) => {
    func(...args, (err, result) => (err ? reject(err) : resolve(result)));
  }),
};
