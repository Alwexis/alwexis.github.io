import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {

  data: any;
  private _url: string = "https://gist.githubusercontent.com/Alwexis/eb44c75c538ab57885922185388f2c08/raw/234abd04c203dde5f966059e4af3f957dd90fc9e/portfolio_data.json"

  constructor(private _http: HttpClient) { }

  async ngOnInit() {
    this.data = await this.get(true);
  }

  async get(fromSource: boolean) {
    if (fromSource || !this.data) {
      this.data = await this.getFromSource();
    }
    return this.data;
  }

  async getFromSource() {
    const response: any = await new Promise((resolve, reject) => {
      try {
        this._http.get(this._url).pipe(take(1)).subscribe({
          next: data => { resolve(data) },
          error: error => { reject(error) }
        })
      } catch (error) {
        reject(error);
      }
    });
    return response;
  }
}
