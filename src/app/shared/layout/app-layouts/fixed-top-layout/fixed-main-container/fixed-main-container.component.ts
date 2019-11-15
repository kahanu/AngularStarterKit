import { Component, OnInit, ViewChild } from '@angular/core';
import { FixedPrimaryNavComponent } from './fixed-primary-nav/fixed-primary-nav.component';

@Component({
  selector: 'app-fixed-main-container',
  templateUrl: './fixed-main-container.component.html',
  styleUrls: ['./fixed-main-container.component.css']
})
export class FixedMainContainerComponent implements OnInit {
  // @ViewChild('app-fixed-primary-nav') public nav: FixedPrimaryNavComponent;
  // isOpen = true;

  constructor() { }

  ngOnInit() {

  }

  // toggleNav() {
  //   if (this.isOpen) {
  //     this.nav.fixedPrimaryNav.nativeElement.style.marginLeft = '-220px';
  //     this.isOpen = false;
  //   } else {
  //     this.nav.fixedPrimaryNav.nativeElement.style.marginLeft = '0';
  //     this.isOpen = true;
  //   }
  // }

}
