import axios from 'axios';

let url = 'http://localhost:4000/api';

let apiInfo = {
    serverUrl: 'http://localhost:4000/',

    //CRUD for projectSchema

    getUser: (id) => {
        return axios.get(url + '/users/' + id)
    },

    postUser: (data) => {
        return axios.post(url + '/users', data)
    },

    userCheck: (data) => {
        return axios.get(url + '/getEmail/' + data)
    },

    updateUser: (id,data) => {
        return axios.put(url + '/users/' + id, data)
    },

    getUserPostCount: (id,data) => {
        return axios.get(url+'/users/' + id,data)
    },

    //CRUD for posts
    getPosts: () => {
        return axios.get(url + '/posts')
    },
    
    getSinglePost: (id) => {
        return axios.get(url +'/posts/'+id)
    },

    getTypes: () => {
        return axios.get(url + '/types')
    },

    getSingleType : (id) => {
        return axios.get(url + '/types/' + id)
    },

    addPost: (data) => {
        return axios.post(url + '/posts', data)
    },

    updatePost: (id,data) => {
        return axios.put(url + '/posts/' + id, data)
    },

    deletePost: (id) => {
        return axios.delete(url + '/posts/' + id)
    },

    addLikes: (postId,userId) => {
        return axios.post(url + '/posts/'+postId+'/likes/'+userId)
    },

    removeLikes: (postId,userId) => {
        return axios.delete(url + '/posts/'+postId+'/likes/'+userId)
    },

    uploadFile : (formData) => {

        var settings = { headers: {'Content-Type': 'multipart/form-data' }}
        return axios.post(url+'/upload',formData,settings)
    
    }
}
  
    


export default apiInfo;