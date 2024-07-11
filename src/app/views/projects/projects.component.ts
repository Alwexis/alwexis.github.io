import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { NgOptimizedImage } from '@angular/common'

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    imports: [NavbarComponent, NgOptimizedImage]
})
export class ProjectsComponent {

}
