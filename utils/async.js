const _throwError = (err, customMessage='') => {
    console.error(err);
    return err;
}

/**
 * A higher-order function to reduce boilerplate code,
 * while making funcitonality more focused and easily testable.
 * !!! Wraps regular function in async if provided with one.
 * @param  {function} unsafeFunction       Async function to wrap with standard try/catch error processor.
 * @param  {string} [customMessage='']      Custom Error message if it is needed for the function.
 * @return {function}               Async function wrapped in try-catch
 */
const _tryCatchHOF = (unsafeFunction, customMessage = '') => {
    return async (...passedArgs) => {
        try {
            // We need to await here, as otherwise if it throws,
            // it will not be caught by the catch block
            return await unsafeFunction(...passedArgs);
        } catch (err) {
            // This function does actual thorowing
            _throwError(err, customMessage);
        }
    }
}

module.exports = {
    _tryCatchHOF,
    _throwError
}