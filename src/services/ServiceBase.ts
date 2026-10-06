
export abstract class ServiceBase{
    static baseURL : string = "https://dummyjson.com"

    static getURL(endpoint : string) : string {
        return `${this.baseURL}${endpoint}`
    }

}