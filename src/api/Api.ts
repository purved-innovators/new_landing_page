import { AxiosInstance } from "./Axios.config";

const submitForm = async (data: any) => {
  try {
    const res = await AxiosInstance.post("/add", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data
  } catch (error) {
    console.error(error);
  }
};

export { submitForm };
