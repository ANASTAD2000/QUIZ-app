import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { HistoriqueComponent } from './historique/historique.component';

export const routes: Routes = [
    // {path : 'home', component : HomeComponent},
    {path : 'heade' , component : HeaderComponent},
    {path : 'home' , component : HomeComponent},
    {path : 'quiz', component : QuizComponent},
    {path : 'result', component : ResultComponent},
    {path : 'historique', component : HistoriqueComponent}, 

];
