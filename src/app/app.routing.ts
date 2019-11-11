import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AlbumComponent } from './components/album/album.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';

const AppRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'album', component: AlbumComponent },
      { path: 'album-detail', component: AlbumDetailComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
