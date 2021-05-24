export default class User{
  Permission = "User"
  Address = ""
  constructor(options){
    this.Login = options.Login || ""
    this.FirstName = options.Name || ""
    this.LastName = options.Fam || ""
    this.Phone = options.Phone || ""
    this.Password = options.Pass || ""
  }
}