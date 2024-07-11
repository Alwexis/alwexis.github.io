import { Routes } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { ExperienceComponent } from './views/experience/experience.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'about-me',
        component: AboutMeComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'experience',
        component: ExperienceComponent
    },
];
