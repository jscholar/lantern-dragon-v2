import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pages',
  pure: false
})
export class JsonPagesPipe implements PipeTransform {
  transform(json: any): string[] {
    const pages: string[] = [];
    for (const page of Object.keys(json)) {
      pages.push(json[page].slug);
    }
    return pages;
  }
}
