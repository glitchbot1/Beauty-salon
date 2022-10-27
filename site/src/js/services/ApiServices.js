import { API_PATH } from "./constants";
import { HttpServices } from "./HttpServices";

class ApiServices extends HttpServices {
  login(authData) {
    return this.post(`${API_PATH}/login`, authData);
  }
  getOrders(access_token) {
    return fetch(`${API_PATH}/orders`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }).then((respons) => respons.json());
  }
  postOrders(orders) {
    return fetch(`${API_PATH}/orders`, {
      method: "POST",
      body: JSON.stringify(orders),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((respons) => respons.json());
  }
}

export default new ApiServices();
