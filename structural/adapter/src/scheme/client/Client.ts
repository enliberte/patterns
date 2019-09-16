import IClient from "./IClient";
import {Service} from "../service/Service";

export default class Client implements IClient {
    methodB(arg: number): number {
        return arg;
    }
}