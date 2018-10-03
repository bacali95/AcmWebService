import { Component, OnInit,Input } from '@angular/core';
import {Acmer} from "../../model/Acmer";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-acmer-details',
  templateUrl: './acmer-details.component.html',
  styleUrls: ['./acmer-details.component.css']
})
export class AcmerDetailsComponent implements OnInit {
  @Input() acmer: Acmer;
  handle:string;
  constructor(private route: ActivatedRoute,private router: Router) {
    if(localStorage.getItem('handle') == null){
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.handle = params.handle;
    });
  }

}
