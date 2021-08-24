import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private formsApiUrl = 'http://localhost:4469/forms';
  private formSubmissionApiUrl = 'http://localhost:4469/submissions';

  constructor(
    private http: HttpClient
  ) { }


  getAll() {
    return this.http.get(this.formsApiUrl);
  }

  get(formId: string) {
    return this.http.get(`${this.formsApiUrl}/${formId}`);
  }

  post(formName: string, formSchema: string) {

    const payload = { name: formName, schema: formSchema };

    return this.http.post(this.formsApiUrl, payload);
  }

  postSubmission(formId: string, formData: string) {

    return this.http.post(
      this.formSubmissionApiUrl,
      { form: formId, data: JSON.stringify(formData) }
    );
  }

}
