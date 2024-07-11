import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private _pages: string[] = [ '', 'about-me', 'projects', 'experience' ];
  private _actualPage: number = 0;
  private _scrollAmount: number = 0;

  constructor(private _router: Router) {
    const currentUrl = document.URL;
    const path = currentUrl.split('?')[0];
    const segments = path.split('/');
    const desiredSegment = segments[segments.length - 1];
    this._actualPage = this._pages.indexOf(desiredSegment);
  }

  shouldChangePage(yDelta: number, isScroll: boolean = false): void {
    if (isScroll && this._scrollAmount < 1) {
      this._scrollAmount++;
      return;
    } else {
      this._scrollAmount = 0;
    }
    if (yDelta < 0) {
      if (this._actualPage < this._pages.length - 1) this._actualPage++;
    } else {
      if (this._actualPage > 0) this._actualPage--;
    }
    if (this._actualPage < 0) this._actualPage = 0;
    this._router.navigate([this._pages[this._actualPage]]);
  }

  changePage(page: string): void {
    this._actualPage = this._pages.indexOf(page);
    this._router.navigate([`/${page}`]);
  }

  getActualPage(): string {
    return this._pages[this._actualPage];
  }
}