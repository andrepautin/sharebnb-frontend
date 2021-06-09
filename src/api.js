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

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${this.token}` };
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

  static async register(data) {
    // console.log(`api register data, file-->`, data, file)
    // const formData = new FormData();
    // formData.append("data", data);
    // console.log(`formdata after data append --> `, formData)
    // formData.append("file", file);
    // console.log(`uploading file ===>`, formData);
    let res = await this.request(`users/register`, data, 'post', { 
    headers: { "Content-Type": "multipart/formdata"}})
    console.log(res);
  }
}

export default ShareBnbApi;
 