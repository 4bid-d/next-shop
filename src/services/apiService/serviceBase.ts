export abstract class ServiceBase{
    static baseURL : string = "https://localhost:3000"

    static getURL(endpoint : string) : string {
        return `${this.baseURL}${endpoint}`
    }

}