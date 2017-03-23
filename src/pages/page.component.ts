import { Component } from '@angular/core';

@Component({
  selector: 'page',
  // template: `<h1>hello world!</h1>`,

  template: require('./page.component.pug'),
  styles:  [require('./page.component.less')],
})
export class PageComponent { }