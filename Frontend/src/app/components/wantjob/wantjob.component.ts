import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-wantjob',
  templateUrl: './wantjob.component.html',
  styleUrls: ['./wantjob.component.css']
})
export class WantjobComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
