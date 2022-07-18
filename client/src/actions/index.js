import axios from 'axios';

export function registerUser({name, lastname, email, password}) {
    const request = axios.post('/api/register', {name, lastname, email, password})
                    .then(response => response.data)
                    
    return {
        type: 'USER_REGISTER',
        payload: request
    }
}

export function loginUser({email, password}) {

    const request = axios.post('/api/login', {email, password})
                    .then(response => response.data)
                    
    return {
        type: 'USER_LOGIN',
        payload: request
    }
}

export function auth() {

    const request = axios.get('/api/auth')
                    .then(response => response.data)

    return {
        type: 'USER_AUTH',
        payload: request
    }
}

export function logoutUser() {
    const request = axios.get('/api/logout')
                    .then(response => response.data)
    
    return {
        type: 'USER_LOGOUT',
        payload: request
    }
}