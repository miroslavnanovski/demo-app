import { Component } from '@angular/core';
import { ThemeCardComponent } from "../themes/theme-box/theme-card.component";
import { PostCardComponent } from '../posts/post-card/post-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ThemeCardComponent,PostCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
