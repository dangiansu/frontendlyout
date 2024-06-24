import {BreakpointObserver} from '@angular/cdk/layout'
import { AfterViewInit, ChangeDetectorRef, Component , ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements AfterViewInit{
  @ViewChild(MatSidenav) sideNav!: MatSidenav;
   constructor (private observer :BreakpointObserver , private cdr : ChangeDetectorRef){

   }
  ngAfterViewInit(): void {
    this.sideNav.opened = true
    this.observer.observe(['(max-width: 787px)']).subscribe(result => {
       
      console.log('---->',result);
      if(result?.matches){
        this.sideNav.mode ='over'
        this.sideNav.close()
      }
      else{
        this.sideNav.mode ='side'
        this.sideNav.open()
      }
    });
    this.cdr.detectChanges();

  }
  toggleSideNav() {
    if (this.sideNav.opened) {
      this.sideNav.close();
    } else {
      this.sideNav.open();
    }
  }
}
