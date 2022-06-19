import api from './index'

export default {
    list: () => api.get('posts/')
}