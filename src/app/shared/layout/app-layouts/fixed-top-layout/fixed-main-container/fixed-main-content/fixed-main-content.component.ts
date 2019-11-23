import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PubSubService } from 'src/app/core/services/pub-sub.service';

@Component({
  selector: 'app-fixed-main-content',
  templateUrl: './fixed-main-content.component.html',
  styleUrls: ['./fixed-main-content.component.css']
})
export class FixedMainContentComponent implements OnInit {
  @ViewChild('mainContent', { static: true }) public mainContent: ElementRef<HTMLDivElement>;
  isOpen = true;

  constructor(private pubSub: PubSubService) { }

  ngOnInit() {
    this.pubSub.getToggleNavState().subscribe(state => {
      this.isOpen = state;
      this.toggleContentWidth(state);
    });
  }

  toggleContentWidth(state: boolean) {
    if (state) {
      this.mainContent.nativeElement.style.marginLeft = '270px';
    } else {
      this.mainContent.nativeElement.style.marginLeft = '40px';
    }
  }

}
