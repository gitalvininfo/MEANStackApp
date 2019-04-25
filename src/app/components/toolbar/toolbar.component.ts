import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  // the selector is the target to display in the page shit.
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

}
