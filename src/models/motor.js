export default class Motor{
  id = 0;
  constructor(Name, Serial,Power,RotationSpeed,Perfomance,PowerFactor,Sliding,MultiplicityMaximum,OperatingVoltage){
    this.Name = Name;
    this.Serial = Serial;
    this.Power = Power;
    this.RotationSpeed = RotationSpeed;
    this.Perfomance = Perfomance;
    this.PowerFactor = PowerFactor;
    this.Sliding = Sliding;
    this.MultiplicityMaximum = MultiplicityMaximum;
    this.OperatingVoltage = OperatingVoltage
  }

  set id(val){
    this.id = val;
  }

  get id(){
    return this.id;
  }
}