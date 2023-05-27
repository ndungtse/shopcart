import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // standalone: true,
})
export class NavbarComponent {
  isMobile: boolean = false;

  toggleMobileMenu() {
    console.log('toggleMobileMenu');
    this.isMobile = !this.isMobile;
  }

  setMenuFals() {
    this.isMobile = false;
  }
}
