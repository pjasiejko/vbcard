export class History {
  label: string;
  level: string;
  dateFrom: string;
  dateTo: string;
  achievements: string[];

  constructor(values = {}) {
    Object.assign(this, values);
  }
}
