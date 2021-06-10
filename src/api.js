import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 *
 */

class ShareBnbApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get", headers = {}) {
    console.debug("API Call:", endpoint, data, method, headers);

    const url = `${BASE_URL}/${endpoint}`;
    // const headers = { Authorization: `Bearer ${this.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  static async register(data, file) {
    console.log("INPUT DATA--->", data);
    // console.log(`api register data, file-->`, file);
    // console.log(`formdata after data append --> `, formData)
    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    formData.append("file", file);
    console.log("FORMDATA IN REGISTER--->", formData);
    let res = await this.request(`users/register`, formData, 'post', { "Content-Type": "multipart/form-data"});
    // let resImg = await this.request(`users/image`, formData, 'post', , )
    console.log("USER RES--->", res);
    // console.log("IMG RES--->", resImg);
  }
}

export default ShareBnbApi;
 