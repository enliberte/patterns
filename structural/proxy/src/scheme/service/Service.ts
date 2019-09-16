import IService from "./IService";

export default class Service implements IService {
    method(): number {
        return Math.random();
    }
}