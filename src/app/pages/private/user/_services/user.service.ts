import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address?: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: number,
      lng: number
    }
  },
  phone: string,
  website?: string,
  company?: {
    name: string,
    catchPhrase: string,
    bs: string
  },
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  WEB_URL = environment.serverUrl

  constructor(private http: HttpClient) { }

  getUsers () {
    return this.http.get<User[]>(`${this.WEB_URL}/users`);
  }

  getUser (userId: number) {
    return this.http.get<User>(`${this.WEB_URL}/users/${userId}`);
  }

  createUser (user: User) {
    return this.http.post<User>(`${this.WEB_URL}/users`, user);
  }

  updateUser (user: User, userId: number) {
    return this.http.put<User>(`${this.WEB_URL}/users/${userId}`, user);
  }

  deleteUser (userId: number) {
    return this.http.delete<User>(`${this.WEB_URL}/users/${userId}`);
  }
}
