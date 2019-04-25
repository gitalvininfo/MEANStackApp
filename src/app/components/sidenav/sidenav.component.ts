import { Component, OnInit, NgZone } from '@angular/core';

const MAX_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${MAX_WIDTH_BREAKPOINT}px)`);


  constructor(zone: NgZone) {
// tslint:disable-next-line: deprecation
    this.mediaMatcher.addListener((mql) => {
      zone.run(() => this.mediaMatcher = matchMedia(`(max-width: ${MAX_WIDTH_BREAKPOINT}px)`));
    })
  }

  ngOnInit() {
  }

  isScreenSmall() {
    return this.mediaMatcher.matches;
  }

}
