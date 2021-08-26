import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { NbToastStatus } from '@nebular/theme/components/toastr/model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FormService } from '../core/services/form.service';
import { builderOptions } from './builder.options';
import { defaultBuilderSchema } from './builder.schema';

@Component({
  selector: 'cit-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnDestroy {

  private onDestory$ = new Subject<void>();
  private isFormSchemaEmpty: boolean = true;

  public formSchema = defaultBuilderSchema;
  public formBuilderOptions = builderOptions;
  public formName: string;


  constructor(
    private formService: FormService,
    private toastrService: NbToastrService,
    private router: Router
  ) { }


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
  }


  ngOnDestroy() {

    this.onDestory$.next();
    this.onDestory$.complete();
  }

}
