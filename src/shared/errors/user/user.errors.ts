export const UserErrors = {
    Conflict: {
        statusCode: 409,
        message: 'Email already exists',
        error: "Conflict Error"
    },

    NotFound: {
        statusCode: 404,
        message: 'Email not exists',
        error: "NotFound Error"
    },

    Unauthorized: {
        statusCode: 401,
        message: 'Invalid credentials',
        error: "Unauthorized Error"
    },
}