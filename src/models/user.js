export default class User{
  Permission = "User"
  Address = ""
  constructor(Login,Name,Fam,Phone,Pass){
    this.Login = Login
    this.FirstName = Name
    this.LastName = Fam
    this.Phone = Phone
    this.Password = Pass
  }
}