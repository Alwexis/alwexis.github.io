import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Util } from '../../classes/util';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements AfterViewInit {
  texts: string[] = [ "Móvil", "Fullstack", "Software" ];
  textIdx: number = 0;
  animatedText = '';

  constructor() {
    this.textAnimationHandler();
  }

  ngAfterViewInit() {
    const video: HTMLVideoElement | null = document.querySelector('#background video');
    if (video) {
      video.muted = true;
      video.play().catch(error => {
        console.error('Autoplay failed:', error);
        // Puedes manejar el error aquí si es necesario
      });
    }
  }

  textAnimationHandler() {
    let text = this.texts[this.textIdx];
    let i = 0;
    let timer = setInterval(() => {
      if (i >= text.length) {
        clearInterval(timer);
        setTimeout(() => {
          let timer = setInterval(() => {
            if (i > -1) {
              this.animatedText = text.substring(0, i)
              i--;
            } else {
              this.textIdx++;
              if (this.textIdx >= this.texts.length) this.textIdx = 0;
              clearInterval(timer);
              this.textAnimationHandler();
            }
          }, 100);
        }, 2000);
      } else {
        this.animatedText += text.charAt(i);
        i++;
      }
    }, 100);
  }
}
