import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollService } from './services/scroll.service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  private _startY: number = 0;

  constructor(private _scroll: ScrollService) { }

  ngAfterViewInit() {
    const body = document.documentElement;
    body.addEventListener('wheel', (e: any) => {
      this._scroll.shouldChangePage(e.wheelDeltaY, true);
    });
    body.addEventListener('touchstart', (e: any) => {
      this._startY = e.changedTouches[0].clientY;
    });
    body.addEventListener('touchend', (e: any) => {
      const isSwiper = this.isAnSwiperElement(e.target);
      if (isSwiper) return;
      if (e.changedTouches[0].clientY > this._startY && e.changedTouches[0].clientY - this._startY > 100) {
        this._scroll.shouldChangePage(1);
      } else if (e.changedTouches[0].clientY < this._startY && this._startY - e.changedTouches[0].clientY > 100) {
        this._scroll.shouldChangePage(-1);
      }
    });
  }

  isAnSwiperElement(e: any) {
    let lastElement = e;
    if (lastElement.tagName.toLowerCase() == 'swiper-container' || e.tagName.toLowerCase() == 'swiper-slide') {
      return true;
    }
    while (lastElement.tagName.toLowerCase() != 'main') {
      lastElement = lastElement.parentElement;
      if (lastElement.tagName.toLowerCase() == 'swiper-container' || lastElement.tagName.toLowerCase() == 'swiper-slide') {
        return true;
      }
    }
    return false;
  }
}
