export default class Motor{
  constructor(id,Name, Serial,MaxPower,MinPower,IsFullSolution,IsEnergySaving){
    this.id = id;
    this.Name = Name;
    this.Serial = Serial;
    this.Max_Power = MaxPower;
    this.Min_Power = MinPower;
    this.Is_Full_Solution = IsFullSolution;
    this.Is_Enegry_Saving = IsEnergySaving;
  }
}