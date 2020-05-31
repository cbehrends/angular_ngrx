export class ServiceType {
  id: number;
  description: string = '';
  cost: number;

  constructor(description: string, cost: number) {
    this.description = description;
    this.cost = cost;
  }
}
