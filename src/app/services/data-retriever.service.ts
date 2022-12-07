import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataRetrieverService {
  private productUrl = 'api/products'; // URL to web api
  private publisherUrl = 'api/publishers'; // URL to web api

  constructor() {}
}
