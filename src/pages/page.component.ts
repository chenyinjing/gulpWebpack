import { rootPath } from "../../main";
declare var UE: any;
require('../libs/ueditor/ueditor.config');
require('../libs/ueditor/ueditor.all');
require('../libs/ueditor/lang/zh-cn/zh-cn');

import { Component } from '@angular/core';

@Component({
  selector: 'page',
  template: require('./page.component.pug'),
  styles:  [require('./page.component.less')],
})
export class PageComponent {

}