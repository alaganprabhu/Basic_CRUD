import axios from "axios";

const API_URL = "https://66b726277f7b1c6d8f1b0c6f.mockapi.io/employee";

export const fetchUsersData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postUsersData = async (payload) => {
  try {
    const response = await axios.post(API_URL, payload);
    return response.data;
    // console.log(response);
    //   fetchUsers(response);
    // setUsers((prevUsers) => [...prevUsers, response.data]);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (id, payload) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserData = (id) => {
  try {
    const response = axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
