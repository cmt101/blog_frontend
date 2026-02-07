import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { Login } from '../pages/login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: `
    <app-header/>
    <main>
      <router-outlet/>
    </main>
  `,
  //templateUrl: './app.html',
  //styleUrl: './app.scss'
  styles: ``
})
export class App {
  protected readonly title = signal('blog_frontend');
}
