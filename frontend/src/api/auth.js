import api from './index'

export default {
    login: (username, password) => api.post('login/', {username:username, password: password})
}