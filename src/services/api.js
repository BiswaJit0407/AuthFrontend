import axios from "axios";


const API_url = import.meta.env.VITE_API_URL;

export const setauthtoken=(token)=>{
if(token){
  axios.defaults.headers.common["Authorization"]=`Bearer ${token}`
}else{
  delete axios.defaults.headers.common["Authorization"];
}
}


export const registeruser = async (userData) => {
  try {
      const response = await axios.post(`${API_url}/register`, userData,{
        headers:{
          "Content-Type":"application/json",
        }
      }) 
     

      console.log(" API Response:", response.data); 
      return response.data;
  } catch (error) {
      console.error(" Signup API Error:", error.response?.data || error.message);
      throw error.response?.data || error.message;
  }
};





export const loginuser = async (credentials) => {
  try {
    const response = await axios.post(`${API_url}/login`,credentials,{
      headers:{
        "Content-Type":"application/json"
      }
    });
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};


export const logout=async()=>{
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  setauthtoken(null)
}