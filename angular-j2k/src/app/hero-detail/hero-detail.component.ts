import { Component, OnInit, Input } from '@angular/core';
import { Hero, Sentence, Kj } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  selectedItem: Sentence;
  onSelect(item: Sentence): void {
    this.selectedItem = item;
    this.getListKj();
  }
  kjList: Kj[];
  getListKj():void{
    this.kjList = new Array();
    this.selectedItem.content.forEach(element => {
      for(var i = 0; i < element.length; ++i){
        var c = element.charCodeAt(i);
        if(c >= 0x4e00 && c <= 0x9faf){
          var existed = false;
          for(var j = 0; j < this.kjList.length; ++j)
            if(this.kjList[j].kj==element[i])
            {
              existed = true;
              break;
            }
          if(!existed)
            this.kjList.push({kj:element[i], detail:null});
        }
      }
    });
    this.kjList.forEach(kj => {
      this.heroService.getKjDetail(kj.kj).subscribe(kjdetail=>{
        kj.detail = kjdetail;
      });
    });
  }
  audio: HTMLAudioElement;
  playAudio(audiofile):void{
    this.audio = new Audio();
    this.audio.src = audiofile;//"../../../assets/sounds/button_1.mp3";
    this.audio.load();
    this.audio.play();
  }
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
    ) { }

    ngOnInit(): void {
      this.getHero();
    }
    
    getHero(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      // this.heroService.getHero(id)
      //   .subscribe(hero => this.hero = hero);
      this.hero = { id: id, name: "", content:[]};
      this.heroService.getHeroItemContent(id)
         .subscribe(heroItem => {
           heroItem.forEach((item,index) => {
            this.hero.content.push( {id: ((id-1) * 100 + index + 1), content:item}  );
           });
           if(this.hero.content.length > 0)
             this.selectedItem = this.hero.content[0];
         });
    }
    goBack(): void {
      this.location.back();
    }
    save(): void {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
}
