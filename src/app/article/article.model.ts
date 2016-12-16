/**
 * article.model
 * Created by dcorns on 12/15/16
 * Copyright © 2016 Dale Corns
 */
'use strict';

export class Article{
  title: string;
  link: string;
  votes: number;
  constructor(title: string, link: string, votes: number = 0){
    this.title = title;
    this.link = link;
    this.votes = votes;
  }
  voteUp() {
    this.votes ++;
    return false; //prevent propagation refresh
  }

  voteDown(){
    this.votes --;
    return false; //prevent propagation refresh
  }

  domain(): string{
    try{
      const link: string = this.link.split('//')[1];
      return link.split('/')[0];
    }catch (err){
      return null;
    }
  }
}
