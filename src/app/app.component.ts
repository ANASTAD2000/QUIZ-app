import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { QuizComponent } from "./quiz/quiz.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, HeaderComponent, HomeComponent, QuizComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'QuizApp';
}
