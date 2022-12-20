export declare class Paymob {
    private _options;
    private _paymentMethod;
    private _onSubmit;
    constructor(options: {} | undefined, onSubmit: Function);
    getData(): Promise<void>;
    handleSubmit: (data: any) => void;
    render(): void;
}
export default Paymob;
