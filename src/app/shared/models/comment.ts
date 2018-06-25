export class Comment {
  id: string;
  date: string;
  user: string;
  content: string;
  constructor (user: string, content: string) {
    this.date = Date();
    this.user = user;
    this.content = content;
    this.id = null;
  }

}
