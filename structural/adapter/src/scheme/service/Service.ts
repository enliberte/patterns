import IService from "./IService";

export class Service implements IService {
    methodA(arg: string): string {
        return arg;
    }
}