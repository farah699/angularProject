import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiseEquipeComponent } from './lise-equipe/lise-equipe.component';
import { LiseMatchComponent } from './lise-match/lise-match.component';
import { MatchsComponent } from './matchs/matchs.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection vers la liste des équipes par défaut
   { path: 'listeEquipe', component: LiseEquipeComponent },
  { path: 'listeMach', component: LiseMatchComponent }, 
{ path: 'matchs', component: MatchsComponent },
{ path: 'home', component: HomeComponent }
// Exemple de route  {path: 'home', component: HomeComponent }, // Route pour la page d'accueil


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
