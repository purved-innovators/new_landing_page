import { AxiosInstance } from "./Axios.config";

const submitForm = async (data: any) => {
  try {
    const res = await AxiosInstance.post("/register", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export { submitForm };
