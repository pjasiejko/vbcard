export class MenuOption {
  id: number;
  title: string;
  link: string;
  active: boolean;

  constructor(values = {}) {
    Object.assign(this, values);
  }
}
