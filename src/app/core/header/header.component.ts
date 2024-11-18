import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { userService } from '../../user/user-service.service';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,HamburgerMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private userService:userService,private router:Router){}

  get isLoggedIn():boolean {
    return this.userService.isLoggedIn;
  }

  get firstName():string {
    return this.userService.user?.firstName || '';
  }

  logout() {
    this.router.navigate(['/home'])
    return this.userService.logout();
  }


  
}
