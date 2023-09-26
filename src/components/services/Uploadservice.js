import axios from "axios";
import API from "../utils/const";

class UploadService {
  getImages() {
    return axios.get(`${API.URI}/donwload`);
  }

  sendImages(name, file) {
    const form = new FormData();
    form.append("name", name);
    form.append("file", file);
    const config = {
        headers:{
            'content-type': 'multipart/form-data'
        }
    }


    return axios.post(`${API.URI}/upload`, form,config);
  }
}

export default new UploadService();
