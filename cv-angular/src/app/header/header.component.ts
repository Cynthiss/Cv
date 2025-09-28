import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  greeting = { text: '', icon: '' };

  ngOnInit(): void {
    this.greeting = this.getGreetingAndIcon();
  }

  getGreetingAndIcon(): { text: string; icon: string } {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
      return { text: '¡Buenos días!', icon: '☀️' };
    }
    if (hour >= 12 && hour < 19) {
      return { text: '¡Buenas tardes!', icon: '🌞' };
    }
    return { text: '¡Buenas noches!', icon: '🌙' };
  }
}
