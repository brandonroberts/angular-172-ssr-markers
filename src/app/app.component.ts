import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-172-ssr';
  http = inject(HttpClient);
  posts: any[] = [];

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      this.posts = posts;
    });
  }
}
