import IService from "./service/IService";

export default class ProxyService implements IService {
    private service: IService;

    constructor(service: IService) {
        this.service = service;
    }

    method(): number {
        console.log('Do something useful');
        return this.service.method();
    }
}