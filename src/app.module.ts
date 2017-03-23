import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { PageComponent } from "./pages/page.component";

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, PageComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }