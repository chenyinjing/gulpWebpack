import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { Page1Component } from "./pages/page1/page.component";
import { Page2Component } from "./pages/page2/page.component";
import { UeditorComponent } from "./common/ueditor/ueditor.component";
import { HttpService } from "./common/http/http.server";
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [ BrowserModule, HttpModule],
  declarations: [ AppComponent, Page1Component,Page2Component,  UeditorComponent ],
  bootstrap: [ AppComponent ],
  providers: [HttpService]
})
export class AppModule { }