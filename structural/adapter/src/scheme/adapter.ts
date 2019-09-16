import Client from "./client/Client";
import {Service} from "./service/Service";

export default class Adapter extends Client {
    private service: Service;

    constructor(service: Service) {
        super();
        this.service = service;
    }

    methodB(arg: number): number {
        const result = super.methodB(arg);
        return +this.service.methodA(result.toString());
    }
}