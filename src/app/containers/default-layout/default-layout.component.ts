import {AfterContentChecked, AfterViewChecked, Component, OnDestroy, OnInit} from '@angular/core';
import { navItems } from './../../_nav';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})

export class DefaultLayoutComponent implements OnDestroy, OnInit, AfterViewChecked {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor(private spinner: NgxSpinnerService) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: [ 'class' ]
    });
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show(); }
  ngAfterViewChecked() {
    this.spinner.hide();
  }
}
