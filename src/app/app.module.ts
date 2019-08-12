import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DbsListComponent } from './components/dbs-list/dbs-list.component';
import { DbsListItemComponent } from './components/dbs-list-item/dbs-list-item.component';
import { PathsListItemComponent } from './components/paths-list-item/paths-list-item.component';
import { PathsListComponent } from './components/paths-list/paths-list.component';
import { ParametersListComponent } from './components/parameters-list/parameters-list.component';
import { ParametersListItemComponent } from './components/parameters-list-item/parameters-list-item.component';
import { TableViewComponent } from './components/table-view/table-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DbsListComponent,
    DbsListItemComponent,
    PathsListItemComponent,
    PathsListComponent,
    ParametersListComponent,
    ParametersListItemComponent,
    TableViewComponent
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
