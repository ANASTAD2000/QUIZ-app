import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  selectedCategory: any;
  categories: any[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getCategories().subscribe((data: any) => {
      this.categories = data.trivia_categories;
    });
  }
}
