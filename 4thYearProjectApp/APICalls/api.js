import * as axios from "axios";
import {getCookie} from "./utils"

export default class Api {
    constructor(){
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
        this.api_token = null;
        this.client = null;
        this.api_Url = null;
    }
}