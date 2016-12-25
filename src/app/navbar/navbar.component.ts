import { Component, OnInit } from '@angular/core';

export interface NavItem {
  // Navigation link
  href: string;
  // Navigation Label
  label: string;
  // Status of Navigation Item
  active: boolean;
}

@Component({
  selector: 'db-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  isCollapsed: boolean = true;
  appName: string = 'Dream Bean';
  navItems: NavItem[] = [
    {href: '#', label: 'Home', active: true},
    {href: '#', label: 'Products', active: false},
    {href: '#', label: 'Checkout', active: false},
    {href: '#', label: 'Sign out', active: false}
  ];

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  constructor() { }

  ngOnInit() {
  }

}
