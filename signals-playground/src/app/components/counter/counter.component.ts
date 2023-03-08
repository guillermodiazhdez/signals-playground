import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Count: {{ count() }}</h1>
  <h1>Double Count: {{ doubleCount() }}</h1>
  <button (click)="updateCount()">Update</button>
  <button (click)="incrementCount()">Increment Count</button>

  `,
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2)

  updateCount() {
    this.count.set(4);
  }

  incrementCount() {
    this.count.update(value => {
      value++;
      return value;
    })
  }
}
