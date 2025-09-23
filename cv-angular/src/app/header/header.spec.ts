import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  greeting = { text: '', icon: '' };

  ngOnInit() {
    this.greeting = this.getGreetingAndIcon();
  }

  getGreetingAndIcon() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
      return { text: '¡Buenos días!', icon: '<i class=\"fas fa-coffee\"></i>' };
    }
    if (hour >= 12 && hour < 19) {
      return { text: '¡Buenas tardes!', icon: '<i class=\"fas fa-sun\"></i>' };
    }
    return { text: '¡Buenas noches!', icon: '<i class=\"fas fa-moon\"></i>' };
  }
}import { ComponentFixture, TestBed } from '@angular/core/testing';


