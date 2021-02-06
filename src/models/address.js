export default class Address{
  constructor(ZipCode,Country,Street,City,Building){
    this.ZipCode = ZipCode
    this.Country = Country
    this.Street = Street
    this.City = City
    this.Building = Building
  }

  GetFullAddress(){
    return `${this.ZipCode},  ${this.Country},  ${this.City},  ${this.Street},  ${this.Building}`
  }
}