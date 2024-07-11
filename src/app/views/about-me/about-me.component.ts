import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ScrollService } from '../../services/scroll.service';

@Component({
    selector: 'app-about-me',
    standalone: true,
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.css',
    imports: [NavbarComponent]
})
export class AboutMeComponent implements OnInit {
    _edad: number = new Date().getMonth() < 11 ? new Date().getFullYear() - 2001 - 1 : new Date().getFullYear() - 2001;
    text: string = '';
    private _textToWrite: string = `
    Soy un estudiante de la carrera Ingeniería Informática, tengo ${this._edad} años.
    Soy un gran apasionado por la tecnología; me interesa mucho el desarrollo de Software y el desarrollo FullStack.
    Ultimamente estoy probando nuevas áreas dentro de mi carrera, como lo son la Gestión de Proyectos y Machine Learning.
    `;
    
    constructor(private _scrollService: ScrollService) { }

    ngOnInit(): void {
        this.handleWriteAnimation();
    }

    handleWriteAnimation(): void {
        let idx = 0;
        let interval = setInterval(() => {
            if (this.text.length == this._textToWrite.length || this._scrollService.getActualPage() != 'about-me') {
                clearInterval(interval);
            } else {
                this.text += this._textToWrite[idx];
                idx++;
                this.handleHighlight();
            }
        }, 10);
        // <span class="text-red-300">
    }

    handleHighlight(): void {
        let newText = this.text;
        newText = newText.replace('desarrollo de Software', '<span class="text-red-300">desarrollo de Software</span>');
        newText = newText.replace('desarrollo FullStack', '<span class="text-red-300">desarrollo FullStack</span>');
        newText = newText.replace('Gestión de Proyectos', '<span class="text-red-300">Gestión de Proyectos</span>');
        newText = newText.replace('Machine Learning', '<span class="text-red-300">Machine Learning</span>');
        let element: any = document.getElementById('about-me-text')
        element.innerHTML = newText;
    }
}
