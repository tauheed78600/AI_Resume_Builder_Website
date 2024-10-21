import axios from 'axios';

const API_KEY=import.meta.env.VITE_STRAPI_API_KEY

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api/',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }
})

const createNewResume = async (data) => {
    try {
        const response = await axiosClient.post('/user-resumes', data);
        console.log('Response:', response);
    } catch (error) {
        console.error('Error:', error.response?.data || error.message);
    }
};

const getUserResumes =(userEmail) =>axiosClient.get('/user-resumes?filters[useremail][$eq]='+userEmail)

const updateResumeDetail =async(id, data) =>{
    try{
    console.log('Updating resume with ID:', id, data);
    const res = await axiosClient.put('/user-resumes/' + id, data)
    console.log("res in line 26", res.data.data)
    }catch(error){
        console.error('Error line 30:', error.response || error.message);
    }
}

const updateExperience = async(id, data)=>{
    console.log("id data in line 35", id, data)
    try{
        const res = await axiosClient.post('/experiences/', data)
    }catch(error){
        console.error('Error line 39:', error.response || error.message);
    }
}


export default {
    createNewResume, 
    getUserResumes, 
    updateResumeDetail,
    updateExperience
}