export class Comment {
  date: String;
  name: String;
  content: String;
  constructor (name: String, content: String) {
    this.date = Date();
    this.name = name;
    this.content = content;
  }

}
