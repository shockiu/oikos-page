import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutDataArticle;
  aboutDataArticle2;
  aboutDataAside;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getDataAbout().subscribe((res) => {
      console.log(res);
      this.aboutDataArticle  = res.article;
      this.aboutDataArticle2 = res.articleAnimations;
      this.aboutDataAside = res.aside;

    }
  );

  }
}
