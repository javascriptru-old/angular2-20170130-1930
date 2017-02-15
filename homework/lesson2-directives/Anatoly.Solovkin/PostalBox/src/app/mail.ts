class Mail {
    public emailFrom: string;
    public subject: string;
    public text: string;
    public receiptTime: Date;

    constructor(obj: any) {
        if (obj != undefined) {
            this.emailFrom = obj.emailFrom;
            this.subject = obj.subject;
            this.text = obj.text;
            this.receiptTime = new Date(obj.receiptTime);
        }
    }
}

export { Mail };