import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  constructor() {
    console.log('Hello from TestComponent');
  }
}
