import axios from 'axios';

let url = 'http://localhost:3003/api';

let apiInfo = {
    serverUrl: 'http://localhost:3003/',

    //CRUD for postSchema

    getPosts: () => {
        return axios.get(url + '/posts')
    },

    addPost: (data) => {
        return axios.post(url + '/posts', data)
    },

    deletePost: (id) => {
        return axios.delete(url + '/posts/' + id)
    },

    updatePost: (id, data) => {
        return axios.put(url + '/posts/' + id, data)
    },

    getUser: (id) => {
        return axios.get(url + '/users/' + id)
    },

    postUser: (data) => {
        return axios.post(url + '/users', data)
    },

    userCheck: (data) => {
        return axios.get(url + '/checkUserName/' + data)
    },

    userAuth: (data) => {
        return axios.post(url + '/userAuth', data)
    },

    getuserName: (data) => {
        return axios.get(url + '/getUsername/' + data)
    }
}

export default apiInfo;