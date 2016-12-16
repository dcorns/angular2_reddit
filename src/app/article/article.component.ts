import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host:{
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;
  }

  voteUp() {
    this.votes ++;
    return false; //prevent propagation refresh
  }

  voteDown(){
    this.votes --;
    return false; //prevent propagation refresh
  }

  ngOnInit() {
  }

}
