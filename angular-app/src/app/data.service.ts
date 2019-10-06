import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private data: string[] = [];

  getData(): string[] {
    return this.data;
  }

  addData(user: string){
    this.data.push(user);
  }
}
