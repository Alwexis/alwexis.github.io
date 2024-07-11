import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ScrollService } from '../../services/scroll.service';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-experience',
    standalone: true,
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.css',
    imports: [NavbarComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExperienceComponent implements OnInit {
    text: string = '';
    private _textsToWrite: string[] = [
        `Mi experiencia Laboral y Profesional que he adquirido a lo largo de mi carrera.`,
        `Mis Logros y Reconocimientos que he recibido a lo largo de mi carrera.`
    ];
    data: any;
    // 0 = experiencia 1 = logros
    activeView: number = 0;
    private _interval: any;

    constructor(private _scrollService: ScrollService, private _data: DataService) { }

    async ngOnInit() {
        this.data = await this._data.get(true);
        console.log(this.data)
        this.handleWriteAnimation();
    }

    handleWriteAnimation(): void {
        let idx = 0;
        this._interval = setInterval(() => {
            if (this.text.length == this._textsToWrite[this.activeView].length || this._scrollService.getActualPage() != 'experience') {
                clearInterval(this._interval);
            } else {
                this.text += this._textsToWrite[this.activeView][idx];
                idx++;
            }
        }, 20);
    }

    changeView(newView: number) {
        this.activeView = newView;
        clearInterval(this._interval);
        this.text = '';
        this.handleWriteAnimation();
    }
}
