
import { extend, type } from 'jquery';

class ContactService {
    async Get () {
        const response = await fetch(`PhoneBook/Get`,

            {
                headers: {
                    'Content-Type': 'application/json;'      //указываем что это обьект ,типо?
                },
                method: 'Get',

            });
        const data = await response.json();

        let result= data.map(function(obj) {
            return {

                ContactName: obj.contactName,             //возвращаем в резалт два обьекта класса к которым мы еще прибавили saved?
                ContactNumber: obj.contactNumber,
                Id: obj.id,
            }
        });
        return result;
    }

}