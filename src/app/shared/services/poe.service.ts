import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {apiUrl} from '../../../environments/api-url';
@Injectable({
  providedIn: 'root'
})
export class PoeService {
  url = apiUrl;
  poeItemList:Array<any> = []
  constructor(private http: HttpClient) {
  }

  getAllItemData(){
    return this.http.get('https://api.poe.watch/itemdata');
  }

  getNextChangeId(){
    return this.http.get('https://poe.ninja/api/Data/GetStats');
  }

  getPublicStash(id:string){
    const ruta = "http://api.pathofexile.com/public-stash-tabs/"+id
    return this.http.get(ruta);
  }



}
