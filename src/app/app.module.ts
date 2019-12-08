import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { AboutComponent } from './about/about.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {
  MatRadioModule, MatInputModule, MatIconModule, MatCheckboxModule, MatSelectModule,
  MatFormFieldModule, MatTabsModule
} from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material';
import { CreateQuestionsComponent } from './create-questions/create-questions.component';
import { DomSanitizer } from '@angular/platform-browser';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'createquest', component: CreateQuestionsComponent },
  { path: '**', component: HomeComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MainpageComponent,
    CreateQuestionsComponent,
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatIconModule,
    AppRoutingModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    MatTabsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatCheckboxModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('/assets/mdi.svg'));
  }
}
