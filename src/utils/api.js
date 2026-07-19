import axios from "axios";

export const postFormData = (url, fields) => {
    const data = new FormData();
    Object.entries(fields).forEach(([key, value]) => {
        data.append(key, value);
    });
    return axios.post(url, data);
};
