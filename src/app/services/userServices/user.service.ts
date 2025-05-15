import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/class';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private URL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL);
  }

  getOneUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.URL}/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.URL}`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.URL}/${user.id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/${id}`);
  }
}
