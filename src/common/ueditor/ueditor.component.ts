declare var UE: any;
require('../../libs/ueditor/ueditor.config');
require('../../libs/ueditor/ueditor.all');
require('../../libs/ueditor/lang/zh-cn/zh-cn');

import { Component } from '@angular/core';
import { rootPath } from "../../../main";

@Component({
  selector: 'ueditor',
  template: require('./ueditor.component.pug'),
  styles:  [require('./ueditor.component.less')],
})
export class UeditorComponent {
  ngOnInit(){
    let options = {
      UEDITOR_HOME_URL: rootPath + 'src/libs/ueditor/',
      serverUrl: rootPath + 'src/libs/ueditor/',
      themePath: rootPath + 'src/libs/ueditor/' + 'themes/',
      initialFrameHeight: 800,
      maximumWords: 2000,
      autoHeightEnabled: false,
    };

    var ue = UE.getEditor('container', options);
  }

}