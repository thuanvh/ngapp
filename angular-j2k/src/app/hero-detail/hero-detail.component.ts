import { Component, OnInit, Input } from '@angular/core';
import { Hero, Sentence, Kj } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';
import { MessageService } from '../message.service';
import { FormatStringPipe } from '../stringFormatPipe';
import { withLatestFrom } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  selectedIndex: number;
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
  //audio: HTMLAudioElement;
  playAudio(audiofile):void{
    let file = new FormatStringPipe().transform(audiofile, {"[sound:":"","]":""});
    file = "https://thuanvh.github.io/j2ks/media/" + file;
    //this.messageService.add(`HeroService: ${file}`);
    let audio = new Audio();
    audio.src = file;//"../../../assets/sounds/button_1.mp3";
    audio.load();
    audio.play();
  }
  replacetext(value: string, args: {[key: string]: string}): string {
      
    // For each argument

    for(var key in args) {
      value = value.replace(key, args[key])
    }
  
    return value;
  }
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private messageService: MessageService
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
            if(item.length > 13)
              item[13]=new FormatStringPipe().transform(item[13], { '[img:': 'https://thuanvh.github.io/j2ks/media/', ']' : '' });
            this.hero.content.push( {id: ((id-1) * 100 + index + 1), content:item}  );
           });
           if(this.hero.content.length > 0)
             this.selectedItem = this.hero.content[0];
         });
    }
    getNextItem():void{
      if(this.hero.content.length > 0){
        let itemIdx = this.selectedItem.id - 1 - (this.hero.id-1)*100;
        let nextIdx = itemIdx + 1;
        if(nextIdx >= this.hero.content.length)
          nextIdx = 0;
        this.onSelect(this.hero.content[nextIdx]);
        //this.selectedItem = this.hero.content[nextIdx];
      }
    }
    goBack(): void {
      this.location.back();
    }
    save(): void {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
    
    autoPlayAudio() {
      const source = timer(1000, 3000);
      let i = 0;
      let max=5;
      const abc = source.subscribe(val => {
        console.log(val, '-');
        //this.subscribeTimer = this.timeLeft - val;
        i++;
        if(i == 0){
          // switch selectedItem
          this.getNextItem();
        }else if(i==1){
          this.playAudio(this.selectedItem.content[4]);
        }else if(i==2){
          this.playAudio(this.selectedItem.content[12]);
        }
        if (i>3)
          i=-1;
      });
    }
}
