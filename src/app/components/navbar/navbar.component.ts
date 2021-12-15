import { Component, OnInit,HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  notif:boolean=false;
  list:boolean=false;
  navitem:boolean=true;
  adminNotif: boolean =false;
  constructor(private router :Router) { }

  ngOnInit(): void {
    const ch = JSON.parse(localStorage.getItem('isloggedIn') || '{}');
    const admin = JSON.parse(localStorage.getItem('user') || '{}');
    if(ch===true){
      this.navitem=false;
    }
    if(admin.isAdmin===true){
      this.adminNotif=true;
    }
  }
  @HostListener('window:scroll',['$event']) onscroll() {
    if(window.scrollY > 200) {
      this.notif= true;
    }
    else {
      this.notif=false;
    }
  }
  onclicky() {
    this.list=!this.list;
  }
  logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('isloggedIn');
    location.reload();
    this.router.navigate(['/']);
  }
}
