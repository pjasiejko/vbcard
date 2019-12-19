export class ContactLink {
  icon: string;
  name: string;
  content: string;
  url: string;

  constructor(values = {}) {
    Object.assign(this, values);
  }
}
