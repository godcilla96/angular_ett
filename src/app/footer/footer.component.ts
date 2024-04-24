import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  firstname: string = "Cecilia";
  lastname: string = "Lindström";
  email: string = "celi2302@student.miun.se"
}
