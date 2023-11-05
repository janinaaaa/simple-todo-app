import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { HeaderComponent } from './header/header.component';
import { AddBoxComponent } from './add-box/add-box.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CategoryItemComponent,
    HeaderComponent,
    AddBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
