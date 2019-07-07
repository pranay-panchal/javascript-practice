class Address {

    constructor () {
        const pinNumber = this.pinCode;
    } 

    pinCode(pinCode) {
        try {
            const pin = pinCode;
            console.log(pin);
            return pin;
        } catch (error) {
            console.log('no pin code fetched');
        }
    }
}