class Contact {
    constructor(id, name, phonenumber, email, message){
        this.id = id;
        this.name = name;
        this.phonenumber = phonenumber;
        this.email = email;
        this.message = message;
        this.condition = "ko'rilmagan";
    }
}

module.exports = Contact;