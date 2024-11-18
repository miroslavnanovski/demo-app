import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-hamburger-menu',
  standalone: true,
  imports: [RouterLink,MenuComponent],
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.css'
})
export class HamburgerMenuComponent {

      isMenuOpened:boolean = false;


    toggleLinks(): void {
    this.isMenuOpened = !this.isMenuOpened;

    }
  

}
