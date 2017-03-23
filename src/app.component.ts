import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // 不支持url的模式加载
  template: require('./app.component.pug'),
  styles:  [require('./app.component.less')],
})
export class AppComponent { }