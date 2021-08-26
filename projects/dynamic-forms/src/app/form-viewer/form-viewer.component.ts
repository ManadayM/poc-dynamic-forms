import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FormService } from '../core/services/form.service';

@Component({
  selector: 'cit-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.css']
})
export class FormViewerComponent implements OnInit, OnDestroy {

  private onDestroy$ = new Subject<void>();

  public formSchema = null;


  constructor(
    private route: ActivatedRoute,
    private formService: FormService
  ) { }


  ngOnInit() {

    // Fetch from id from the route
    const formId = this.route.snapshot.paramMap.get('id');
    if (formId) {
      this.getFormSchema(formId);
    }
  }


  /**
   * Fetch JSON schema for the supplied form id.
   * @param formId unique form id.
   */
  getFormSchema(formId: string): void {

    this.formService.get(formId)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((data: any) => {
        this.formSchema = JSON.parse(data.schema);
      });
  }


  submitForm(event: any) {

    const formId = this.route.snapshot.paramMap.get('id');
    const formData = event.data;

    this.formService
      .postSubmission(formId, formData)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((formSubmissionResponse) => {
        console.log(`Form submitted: ${JSON.stringify(formSubmissionResponse)}`);
      });
  }


  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
