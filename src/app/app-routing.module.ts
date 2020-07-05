import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AcademicComponent } from './pages/academic/academic.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { EventsComponent } from './pages/events/events.component';
import { InscriptionsComponent } from './pages/inscriptions/inscriptions.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'material', component: AcademicComponent },
  { path: 'inscriptions', component: InscriptionsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
