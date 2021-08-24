import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { NbToastStatus } from '@nebular/theme/components/toastr/model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormService } from '../core/services/form.service';

@Component({
  selector: 'cit-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit, OnDestroy {

  private onDestory$ = new Subject<void>();

  private isFormSchemaEmpty: boolean = true;

  public formName: string;
  public formSchema: Object = {
    "components": [
    ]
  };

  // @ViewChild('json') jsonElement?: ElementRef;

  constructor(
    private formService: FormService,
    private toastrService: NbToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  saveForm() {
    const isValid = this.assertValidity();

    if (isValid) {

      this.formService.post(this.formName, JSON.stringify(this.formSchema))
        .pipe(takeUntil(this.onDestory$))
        .subscribe((data: any) => {
          console.log(`Form saved successfully: ${JSON.stringify(data)}`);
          // this.toastrService.show('Form saved successfully.', 'Success', { status: NbToastStatus.SUCCESS });

          this.router.navigate(['/']);
        });
    }
  }

  assertValidity() {
    const hasFormName = !!this.formName;
    const hasFormSchema = this.isFormSchemaEmpty !== true;

    return hasFormName && hasFormSchema;
  }

  onChange(event) {
    const form = event.form;

    if (form.components.length >= 2) {
      this.isFormSchemaEmpty = false;
    }

    // this.jsonElement.nativeElement.innerHTML = '';
    // this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
  }

  ngOnDestroy() {

    this.onDestory$.next();
    this.onDestory$.complete();
  }

}
