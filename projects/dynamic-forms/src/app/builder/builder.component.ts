import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'cit-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  public formName: string;
  public currentStep: number = 0;

  @ViewChild('json') jsonElement?: ElementRef;

  public form: Object = {
    components: []
  };

  constructor(
  ) { }

  ngOnInit() {
  }

  onChange(event) {
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
  }

}
