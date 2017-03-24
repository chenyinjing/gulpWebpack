import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { PageComponent } from "./pages/page.component";
import { UeditorComponent } from "./common/ueditor/ueditor.component";

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, PageComponent, UeditorComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }