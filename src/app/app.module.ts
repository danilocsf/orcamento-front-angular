import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { ListIncomeComponent } from './modules/incomes/list/list-income.component';
import { DetailIncomeComponent } from './modules/incomes/detail/detail-income.component';
import { CreateUpdateIncomeComponent } from './modules/incomes/create-update/create-update-income.component';
import { ListCategoryComponent } from './modules/category/list/list-category.component';
import { DetailCategoryComponent } from './modules/category/detail/detail-category.component';
import { CreateUpdateCategoryComponent } from './modules/category/create-update/create-update-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListIncomeComponent,
    DetailIncomeComponent,
    CreateUpdateIncomeComponent,
    ListCategoryComponent,
    DetailCategoryComponent,
    CreateUpdateCategoryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
