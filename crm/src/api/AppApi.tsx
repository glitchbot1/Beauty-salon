import { HttpService } from "../services/HttpServices";
import { AuthData } from "../common/interfaces/AuthData";
import { TokenInterfaces } from "../common/interfaces/TokenInterfaces";



class AppApi extends HttpService{
    login(AuthData:AuthData ): Promise<TokenInterfaces>{
        return this.post('login', AuthData)
    }

}

export default new AppApi();