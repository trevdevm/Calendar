class ValidationError extends Error {
    constructor(message) {
        super(message)

        this.name = 'ValidationError'
        this.status = 400
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ValidationError)
        }
    }
}

module.exports = ValidationError;