export class Project {
  name: string;
  duration: string;
  description: string;
  technologies: string;
  pictures: string[];

  constructor(values = {}) {
    Object.assign(this, values);
  }
}
