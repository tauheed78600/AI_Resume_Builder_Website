import axios from 'axios';

const API_KEY=import.meta.env.VITE_STRAPI_API_KEY
console.log("tree in line 4", API_KEY);

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api/',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }
})

const createNewResume = async (data) => {
    console.log("data in line 13", data)
    try {
        const response = await axiosClient.post('/user-resumes', data);
        console.log('Response:', response);
    } catch (error) {
        console.error('Error:', error.response?.data || error.message);
    }
};

const getUserResumes =(userEmail) =>axiosClient.get('/user-resumes?filters[useremail][$eq]='+userEmail)

export default {createNewResume, getUserResumes}