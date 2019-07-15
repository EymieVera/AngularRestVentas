import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  domain = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getDataPost() {
    return this.http.get<any>(this.domain)
    .pipe(map(data => data));
  }

}
