import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './base-app.component.html',
  styleUrls: ['./base-app.component.scss']
})
export class BaseAppComponent implements OnInit {
    // Step 1:
  // Create a property to track whether the menu is open.
  // Start with the menu collapsed so that it does not
  // appear initially when the page loads on a small screen!
  public isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
