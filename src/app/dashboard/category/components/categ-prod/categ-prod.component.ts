import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-categ-prod',
  templateUrl: './categ-prod.component.html',
  styleUrls: ['./categ-prod.component.css']
})
export class CategProdComponent implements OnInit {
  @Input() name!:string;
  @Input() numbers!:number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
