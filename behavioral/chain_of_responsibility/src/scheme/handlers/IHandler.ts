export default interface IHandler {
    handle(request): void;
    setNext(handler: IHandler): void;
}