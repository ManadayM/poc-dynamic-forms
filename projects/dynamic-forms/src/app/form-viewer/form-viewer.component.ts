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

  public formSubmissionUrl = 'http://localhost:4469/submissions';
  public formSchema = null;

  public options = {
    "hooks": {
      "beforeSubmit": function (submission, callback) {
        console.log(submission);
        // Do something asynchronously.
        // setTimeout(function () {
        //   // Callback with a possibly manipulated submission.
        //   callback({
        //     message: "Something bad happened.",
        //     component: null
        //   }, null);
        // }, 1000)
      }
    }
  };

  constructor(
    private route: ActivatedRoute,
    private formService: FormService
  ) { }

  ngOnInit() {
    const formId = this.route.snapshot.paramMap.get('id');
    if (formId) {
      // this.formSubmissionUrl = `http://localhost:4469/form/${formId}`;
      this.getFormSchema(formId);
    }
  }

  onSubmit(submission: any) {
    console.log(submission);
    this.formService
      .postSubmission(this.route.snapshot.paramMap.get('id'), submission)
      .subscribe((formSubmissionResponse) => {
        console.log(formSubmissionResponse);
      });
  }

  getFormSchema(formId: string) {
    return this.formService.get(formId)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((data: any) => {
        this.formSchema = JSON.parse(data.schema);
      });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
