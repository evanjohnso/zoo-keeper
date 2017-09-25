import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ZooManagerComponent } from './zoo-manager/zoo-manager.component';
import { AnimalListComponent } from './zoo-manager/animal-list/animal-list.component';
import { HeaderComponent } from './header/header.component';
import { EditComponent } from './zoo-manager/edit/edit.component';
import { NewAnimalComponent } from './zoo-manager/new-animal/new-animal.component';
import { filterAgePipe } from './ageFilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ZooManagerComponent,
    AnimalListComponent,
    HeaderComponent,
    EditComponent,
    NewAnimalComponent,
    filterAgePipe
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
