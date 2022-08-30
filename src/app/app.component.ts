import { Component, ElementRef, Renderer2 } from '@angular/core';
import {rippleffect} from 'src/assets/js/ripple';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}
  
  ngAfterViewInit() {
    rippleffect(this.elementRef, this.renderer2);
  }

}
