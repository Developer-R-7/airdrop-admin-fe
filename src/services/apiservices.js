import axios from "axios";

const API = "http://localhost:5050";

export const getEnrolledUsers = async (id) => {
  try {
    const response = await axios.get(`${API}/api/company/enrolled-users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error while fetching data" };
  }
};

export const acceptUsers = async (data) => {
  try {
    const response = await axios.post(`${API}/api/company/accept-user/`, {
      ...data,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error while fetching data" };
  }
};

export const rejectUsers = async (data) => {
  try {
    const response = await axios.post(`${API}/api/company/reject-user/`, {
      ...data,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error while fetching data" };
  }
};
