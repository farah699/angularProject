import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LiseEquipeComponent } from './lise-equipe/lise-equipe.component';
import { LiseMatchComponent } from './lise-match/lise-match.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MatchsComponent } from './matchs/matchs.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LiseEquipeComponent,
    LiseMatchComponent,
    MatchsComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
