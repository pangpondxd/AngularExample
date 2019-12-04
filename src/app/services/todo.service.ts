import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({ //ทำให้คลาสอยู่ในรูปแบบ service
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) {

   }
   getTodoList(){
     const headers = {
       'Content-Type': 'application/json',
     };
     return this.http.get('https://jsonplaceholder.typicode.com/todos', {headers: headers});
   }
}
