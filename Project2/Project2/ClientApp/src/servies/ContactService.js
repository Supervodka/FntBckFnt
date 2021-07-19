
import { extend, type } from 'jquery';
export function Add(contact);

export default class ContactService {
    controllerName= 'PhoneBook'
    
   RepeaterCode(response){
    const data =  response.json();

    let result= data.map(function(obj) {
        return {

            ContactName: obj.contactName,             //возвращаем в резалт два обьекта класса к которым мы еще прибавили saved?
            ContactNumber: obj.contactNumber,
            Id: obj.id,
        }
    });
    return result;
   }

    async Get () {
        const response = await fetch(`${this.controllerName}/Get`,

            {
                headers: {
                    'Content-Type': 'application/json;'      //указываем что это обьект ,типо?
                },
                method: 'Get',

            });
        return this.DoubleCode(response);
    }
    
    async Search(ContactName){
        const respone = await fetch (`${this.controllerName}/Update?name=`+ContactName,
        {
            headers:{
                'Content-Type': 'application/json;'
            },
            method: 'Get',
        });
        return this.DoubleCode(respone);
        
    }

   export  async Add (contact){
        const response = await fetch (`${this.controllerName}/AddNew`,
        {
            headers :{
                'Content-Type':'application/json;'
            },
            method:'Post',
            body: JSON.stringify(contact)

        });
        
    }

    async Update(contact){
        const response = await fetch(`${this.controllerName}/Update`,
        {
            headers:{
                'Content-Type' : 'application/json;'
            },
            method :'Put',
            body: JSON.strinigfy(contact)
        });

    }
    

    async Remove(id){
        
       
        const response =await fetch (`${this.controllerName}/Remove?id=`+id,
        {
        headers : {

            'Content-Type' : 'application/json;'
        },
        method :'Delete',
        });
    }
    
    
  
}