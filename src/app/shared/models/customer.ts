export class Customer{
    id: number;
    companyid: string;
    name: string;
    logofile: string;
    company_address: AddressObj;
    mailing_address: AddressObj;
    contact_person: string;
    contact_phone: string;
    contact_mail: string;

}

export class AddressObj {
    street1: string;
    street2: string;
    city: string;
	state: string;
    country: string;
    pincode: string;
}
