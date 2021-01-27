export default class Motor{
  constructor(id,Name, Serial,MaxPower,MinPower,IsFullSolution,IsEnergySaving){
    this.id = id;
    this.Name = Name;
    this.Serial = Serial;
    this.MaxPower = MaxPower;
    this.MinPower = MinPower;
    this.IsFullSolution = IsFullSolution;
    this.IsEnergySaving = IsEnergySaving;
  }
}