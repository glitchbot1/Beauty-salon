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
    })
.then((json) => {
        if(json === 201){
            alert('успех')
        }
            // console.log(json)
        // console.log(alert('ваша заявка принята'))
        let message = document.getElementById('message');
        message.innerText = 'Ваша заявка отправлена! В ближайшее время с вами свяжется менеджер';
        console.log(message)
        //     console.log(message)
        //    
    })
    .catch(err => console.log('ошибка'));
  }
}

export default new ApiServices();
