import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule,
MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule} from '@angular/material';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

import {IssueService } from './issue.service';
import { CharactersComponent} from './components/characters/characters.component';
import { CreatecharacterComponent } from './components/createcharacter/createcharacter.component';
import { EditcharacterComponent } from './components/editcharacter/editcharacter.component';

const routes: Routes = [
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'list', component: ListComponent},
  {path: 'characters', component: CharactersComponent},
  {path: 'createcharacter', component: CreatecharacterComponent},
  {path: 'editcharacter/:id', component: EditcharacterComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'} // when ng serve, it will redirect to this link
];


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    CharactersComponent,
    CreatecharacterComponent,
    EditcharacterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule, 
    MatOptionModule, 
    MatSelectModule, 
    MatIconModule, 
    MatButtonModule,
    MatCardModule, 
    MatTableModule, 
    MatDividerModule, 
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
