import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ZooManagerComponent } from './zoo-manager/zoo-manager.component';
import { AnimalListComponent } from './zoo-manager/animal-list/animal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ZooManagerComponent,
    AnimalListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
