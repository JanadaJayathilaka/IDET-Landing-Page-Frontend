import axios from "axios";
import { apiConfig } from "../api/apiConfig.js";

export const validateCustomerToken = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  }
  try {
    await axios.get(`${apiConfig.me}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Token is valid");
    return true;
  } catch (error) {
    console.log("Token is invalid or expired", error);
    localStorage.removeItem("token");
    return false;
  }
};
