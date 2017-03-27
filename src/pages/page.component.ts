declare var UE: any;
// require('../libs/ueditor/ueditor.config');
// require('../libs/ueditor/ueditor.all');
// require('../libs/ueditor/lang/zh-cn/zh-cn');

import '../libs/ueditor/ueditor.config';
import '../libs/ueditor/ueditor.all';
import '../libs/ueditor/lang/zh-cn/zh-cn';

import { Component } from '@angular/core';
import { HttpService } from "../common/http/http.server";

@Component({
  selector: 'page',
  template: require('./page.component.pug'),
  styles:  [require('./page.component.less')],
})
export class PageComponent {
  constructor(private httpService: HttpService) {}

  getMock() {
    this.httpService.get('/mock/info').subscribe(data=>{
      console.debug('data = ', data);
    });
  }
  putMock() {
    this.httpService.put('/mock/putInfo', {name: 'lvxiaobu',age: 3}).subscribe(data=>{
      console.debug('data = ', data);
    });
  }
  postMock() {
    this.httpService.post('/mock/postInfo', {name: 'lvxiaobu',age: 3}).subscribe(data=>{
      console.debug('data = ', data);
    });
  }
}