export default class Address{
  constructor(obj){
    this.Email = obj.Email
    this.ZipCode = obj.ZipCode
    this.Country = obj.Country
    this.Street = obj.Street
    this.City = obj.City
    this.Building = obj.Building
    this.Apartament = obj.Apartament
  }

  GetFullAddress(){
    return `Почтовый Индекс: ${this.ZipCode},
    Страна: ${this.Country},
    Город: ${this.City},
    Улица: ${this.Street},
    Дом: ${this.Building}
    Квартира: ${this.Apartament}
    Почта для коонтакта: ${this.Email}`
  }
}