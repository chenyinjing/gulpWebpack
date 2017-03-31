import { Observable } from "rxjs";
declare var UE: any;
// require('../libs/ueditor/ueditor.config');
// require('../libs/ueditor/ueditor.all');
// require('../libs/ueditor/lang/zh-cn/zh-cn');

import '../../libs/ueditor/ueditor.config';
import '../../libs/ueditor/ueditor.all';
import '../../libs/ueditor/lang/zh-cn/zh-cn';

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from "../../common/http/http.server";

@Component({
  selector: 'page1',
  template: require('./page.component.pug'),
  styles:  [require('./page.component.less')],
})
export class Page1Component {
  @Input() results: Observable<any>;
  @Output() todo = new EventEmitter();
  cliresults;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.results.subscribe(data => {
      if (data) {
        this.cliresults = data;
      }
    });
  }

  makeEventEmitter() {
    this.todo.emit({name: 'makeEventEmitter', age: 30});
  }

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