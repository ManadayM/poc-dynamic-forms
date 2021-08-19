import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private apiUrl = 'http://localhost:4469/forms';

  constructor(
    private http: HttpClient
  ) { }


  getAll() {
    return this.http.get(this.apiUrl);
  }

  post(formName: string, formSchema: string) {

    const payload = { name: formName, schema: formSchema };

    return this.http.post(this.apiUrl, payload);
  }

}
