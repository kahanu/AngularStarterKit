import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PubSubService } from 'src/app/core/services/pub-sub.service';

@Component({
  selector: 'app-fixed-primary-nav',
  templateUrl: './fixed-primary-nav.component.html',
  styleUrls: ['./fixed-primary-nav.component.css']
})
export class FixedPrimaryNavComponent implements OnInit {
  @ViewChild('fixedPrimaryNav', { static: true }) public fixedPrimaryNav: ElementRef<HTMLDivElement>;
  isOpen = true;

  constructor(private pubSub: PubSubService) { }

  ngOnInit() {
  }

  toggleNav() {
    if (this.isOpen) {
      this.fixedPrimaryNav.nativeElement.style.marginLeft = '-250px';
      this.isOpen = false;
    } else {
      this.fixedPrimaryNav.nativeElement.style.marginLeft = '0';
      this.isOpen = true;
    }
    this.pubSub.publishToggleNavState(this.isOpen);
  }

}
