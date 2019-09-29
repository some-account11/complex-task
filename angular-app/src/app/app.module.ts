import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCatalogComponent } from './user-catalog/user-catalog.component';
import {FormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";

@NgModule({
  declarations: [
    AppComponent,
    UserCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
