import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial-page',
  standalone: false,
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {

  title = 'angular-bootstrap-template';

  constructor() { }

  ngOnInit(): void {
  }

}
