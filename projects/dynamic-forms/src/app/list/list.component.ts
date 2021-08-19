import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormService } from '../core/services/form.service';

@Component({
  selector: 'cit-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  private onDestory$ = new Subject<void>();

  public forms: any = [];

  constructor(
    private formService: FormService
  ) { }

  ngOnInit() {

    this.formService.getAll()
      .pipe(takeUntil(this.onDestory$))
      .subscribe((forms) => {
        this.forms = forms;
      });
  }

  ngOnDestroy() {

    this.onDestory$.next();
    this.onDestory$.complete();
  }

}
