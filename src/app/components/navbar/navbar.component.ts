import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'navbar-component',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() actualView: string = '';

  constructor(private _scrollSrv: ScrollService) { }

  async changePage(path: string) {
    if (this.actualView == path) return;
    this._scrollSrv.changePage(path);
  }
}
