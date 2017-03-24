declare var UE: any;
// require('../libs/ueditor/ueditor.config');
// require('../libs/ueditor/ueditor.all');
// require('../libs/ueditor/lang/zh-cn/zh-cn');

import { Component } from '@angular/core';

@Component({
  selector: 'page',
  template: require('./page.component.pug'),
  styles:  [require('./page.component.less')],
})
export class PageComponent {
  ngAfterViewInit(){
    var ue = UE.getEditor('container');


    // let options = {
    //   UEDITOR_HOME_URL: UE.path,
    //   serverUrl: UE.path,
    //   themePath: UE.path+'themes/',
    //   autoHeightEnabled: false,
    //   initialFrameHeight: 800,
    //   maximumWords: 2000,
    //   toolbars: [
    //     [
    //       'undo', //撤销
    //       'redo', //重做
    //       'bold', //加粗
    //       'indent', //首行缩进
    //       'italic', //斜体
    //       'underline', //下划线
    //       'strikethrough', //删除线
    //       'subscript', //下标
    //       'fontborder', //字符边框
    //       'superscript', //上标
    //       'formatmatch', //格式刷
    //       'source', //源代码
    //       'blockquote', //引用
    //       'pasteplain', //纯文本粘贴模式
    //       'selectall', //全选
    //       'horizontal', //分隔线
    //       'removeformat', //清除格式
    //       'time', //时间
    //       'date', //日期
    //       'unlink', //取消链接
    //       'insertrow', //前插入行
    //       'insertcol', //前插入列
    //       'mergeright', //右合并单元格
    //       'mergedown', //下合并单元格
    //       'deleterow', //删除行
    //       'deletecol', //删除列
    //       'splittorows', //拆分成行
    //       'splittocols', //拆分成列
    //       'splittocells', //完全拆分单元格
    //       'deletecaption', //删除表格标题
    //       'inserttitle', //插入标题
    //       'mergecells', //合并多个单元格
    //       'deletetable', //删除表格
    //       'cleardoc', //清空文档
    //       'insertparagraphbeforetable', //"表格前插入行"
    //       'insertcode', //代码语言
    //       'fontfamily', //字体
    //       'fontsize', //字号
    //       'paragraph', //段落格式
    //       'edittable', //表格属性
    //       'edittd', //单元格属性
    //       'link', //超链接
    //       'justifyleft', //居左对齐
    //       'justifyright', //居右对齐
    //       'justifycenter', //居中对齐
    //       'justifyjustify', //两端对齐
    //       'forecolor', //字体颜色
    //       'backcolor', //背景色
    //       'insertorderedlist', //有序列表
    //       'insertunorderedlist', //无序列表
    //       'fullscreen', //全屏
    //       'directionalityltr', //从左向右输入
    //       'directionalityrtl', //从右向左输入
    //       'rowspacingtop', //段前距
    //       'rowspacingbottom', //段后距
    //       'pagebreak', //分页
    //       'imagenone', //默认
    //       'imageleft', //左浮动
    //       'imageright', //右浮动
    //       'imagecenter', //居中
    //       'lineheight', //行间距
    //       'edittip ', //编辑提示
    //       'customstyle', //自定义标题
    //       'autotypeset', //自动排版
    //       'touppercase', //字母大写
    //       'tolowercase', //字母小写
    //       'inserttable', //插入表格
    //       'charts', // 图表
    //     ]
    //   ]
    // };
    //
    // UE.getEditor('editor', options);
  }
}