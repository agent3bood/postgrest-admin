import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DbsListComponent } from './components/dbs-list/dbs-list.component';
import { DbsListItemComponent } from './components/dbs-list-item/dbs-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DbsListComponent,
    DbsListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
