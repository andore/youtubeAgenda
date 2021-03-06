import { Live } from './../../../shared/model/live.model';
import { LiveService } from './../../../shared/service/live.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  livePrevious: Live[] = [];
  liveNext: Live[] = [];

  constructor(
    public liveService: LiveService,
    public sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.getLives();
  }

  getLives(){
    this.liveService.getLivesWithFlag('previous').subscribe(data => {
      this.livePrevious = data.content;
      console.log(this.livePrevious);
      this.livePrevious.forEach(live => {
        live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink.replace("watch?v=", "embed\/"));
      });
    });

    this.liveService.getLivesWithFlag('next').subscribe(data => {
      this.liveNext = data.content;
      console.log(this.liveNext);
      this.liveNext.forEach(live => {
        live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink.replace("watch?v=", "embed\/"));
      });
    })
  }

  deleteLive(id: string){
    console.log("Apagar:" + id);
    this.liveService.deleteLives(id).subscribe(result => {
      console.log(result);  
      window.location.reload();
    });
  }
}
