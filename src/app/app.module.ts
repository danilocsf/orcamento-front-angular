import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { ListIncomeComponent } from './modules/incomes/list/list-income.component';
import { DetailIncomeComponent } from './modules/incomes/detail/detail-income.component';
import { CreateUpdateIncomeComponent } from './modules/incomes/create-update/create-update-income.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListIncomeComponent,
    DetailIncomeComponent,
    CreateUpdateIncomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
