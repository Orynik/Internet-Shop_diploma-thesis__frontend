import Address from "./address"

export default class manufacturer extends Address{
  id = 0;

  constructor(obj,Company,Email,Tel){
    super(obj.Zip,obj.Country,obj.Street,obj.City,obj.Building)
    this.Tel = Tel
    this.Company = Company
    this.Email = Email
  }

  set id(val){
    this.id = val;
  }
}