export class Comment {
  id: string;
  date: string;
  name: string;
  content: string;
  constructor (name: string, content: string) {
    this.date = Date();
    this.name = name;
    this.content = content;
    this.id = null;
  }

}
