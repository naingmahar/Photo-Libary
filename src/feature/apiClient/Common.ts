import { instance } from "./config/Instance";
import { END_POINT } from "./config/endpoint";

export const uploadImage = async (form:FormData) => {
    let res = await instance.post(END_POINT.upload_image,form,{
        headers: {
          "Content-Type": "multipart/form-data",
        }});
    return res.data
}