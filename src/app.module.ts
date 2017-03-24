import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { PageComponent } from "./pages/page.component";
import { UeditorComponent } from "./common/ueditor/ueditor.component";
import { HttpService } from "./common/http/http.server";
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [ BrowserModule, HttpModule],
  declarations: [ AppComponent, PageComponent, UeditorComponent ],
  bootstrap: [ AppComponent ],
  providers: [HttpService]
})
export class AppModule { }