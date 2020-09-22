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

    userAuth: (data) => {
        return axios.post(url + '/userAuth', data)
    },

    //CRUD for posts
    getPosts: () => {
        return axios.get(url + '/posts')
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
    // getPosts = () => {
    //     axios.get(url + '/posts')
    //     .then(res => {
    //     this.setState({post:res.data})
    //     })
    // }

    // addPost = (data) => {
    //     axios.post(url + '/posts', data)
    //     .then(res => {
    //     this.getPosts()
    //     })
    // }

    // updatePost = (id,data) => {
    //     axios.put(url + '/posts/' + id, data)
    //     .then(res => {
    //     this.getPosts()
    //     })
    // }

    // deletePost = (id) => {
    //     axios.delete(url + '/posts/' + id)
    //     .then(rest=>{
    //     this.getPosts()
    //     })

    uploadFile : (formData) => {

        var settings = { headers: {'Content-Type': 'multipart/form-data' }}
        return axios.post(url+'/upload',formData,settings)
    
    }
}
  
    


export default apiInfo;