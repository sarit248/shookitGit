import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['./main']);
    }, 2000);
  }
}
