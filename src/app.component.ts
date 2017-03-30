import { Component } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'my-app',
  // 不支持url的模式加载
  template: require('./app.component.pug'),
  styles:  [require('./app.component.less')],
})
export class AppComponent {
  pass={name: 'PagesTestChenComponent', age: 100};
  old = {name: 'changeResult', age: 100};
  counter;
  counterObser;
  constructor() {
  this.counter = new Observable<any>((observer) => {
      observer.next(this.pass);
      this.counterObser = observer;
    });
  }

  changeResult() {
    let tmp = this.pass;
    this.pass = this.old;
    this.old = tmp;
    this.counterObser.next(this.pass);
  }
  todoEmit($event) {
    console.debug('todoEmit = ', $event);
  }
}