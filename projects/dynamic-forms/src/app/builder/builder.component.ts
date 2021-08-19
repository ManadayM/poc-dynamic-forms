import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
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
      {
        "title": "Lathe Preventative Maintenance Procedure",
        "theme": "primary",
        "collapsible": false,
        "key": "latheMachineMaintenanceChecklist",
        "type": "panel",
        "label": "Lathe Machine Maintenance Checklist",
        "input": false,
        "tableView": false,
        "components": [
          {
            "html": "<h2 style=\"margin-left:0px;\">Lathe Preventative Maintenance Procedure</h2><p><span style=\"background-color:rgb(252,252,252);color:rgb(68,68,68);\">SOP ID: 2349</span><br><span style=\"background-color:rgb(252,252,252);color:rgb(68,68,68);\">Effective from: 01 Aug 2021&nbsp;</span><br><span style=\"background-color:rgb(252,252,252);color:rgb(68,68,68);\">Author: Nisarg Shah</span></p>",
            "label": "Content",
            "refreshOnChange": false,
            "key": "content",
            "type": "content",
            "input": false,
            "tableView": false
          },
          {
            "label": "Columns",
            "columns": [
              {
                "components": [
                  {
                    "legend": "Mandatory checks",
                    "key": "fieldSet",
                    "type": "fieldset",
                    "label": "Field Set",
                    "input": false,
                    "tableView": false,
                    "components": [
                      {
                        "legend": "#1 Disconnect",
                        "key": "fieldSet3",
                        "type": "fieldset",
                        "label": "Field Set",
                        "input": false,
                        "tableView": false,
                        "components": [
                          {
                            "label": "Turn the machine off from the main power point",
                            "tableView": false,
                            "key": "turnTheMachineOffFromTheMainPowerPoint",
                            "type": "checkbox",
                            "input": true,
                            "defaultValue": false
                          }
                        ]
                      },
                      {
                        "legend": "#2 Open side cover",
                        "key": "fieldSet2",
                        "type": "fieldset",
                        "label": "Field Set",
                        "input": false,
                        "tableView": false,
                        "components": [
                          {
                            "label": "Driving belts, if the belts are damaged, excessive cracks, or an excessive wear, they must be replaced",
                            "tableView": false,
                            "key": "drivingBeltsIfTheBeltsAreDamagedExcessiveCracksOrAnExcessiveWearTheyMustBeReplaced",
                            "type": "checkbox",
                            "input": true,
                            "defaultValue": false
                          },
                          {
                            "label": "Check tension of belts",
                            "tableView": false,
                            "key": "checkTensionOfBelts",
                            "type": "checkbox",
                            "input": true,
                            "defaultValue": false
                          },
                          {
                            "label": "heck brake conditions ( on models with pedal brake)",
                            "tableView": false,
                            "key": "heckBrakeConditionsOnModelsWithPedalBrake",
                            "type": "checkbox",
                            "input": true,
                            "defaultValue": false
                          }
                        ]
                      },
                      {
                        "legend": "#3 Turn the lathe ON and ...",
                        "key": "fieldSet4",
                        "type": "fieldset",
                        "label": "Field Set",
                        "input": false,
                        "tableView": false,
                        "components": [
                          {
                            "label": "Run the lathe for a couple of minutes",
                            "tableView": false,
                            "key": "runTheLatheForACoupleOfMinutes",
                            "type": "checkbox",
                            "input": true,
                            "defaultValue": false
                          },
                          {
                            "label": "Check level of lubricant oil on visor main gearbox",
                            "tableView": false,
                            "key": "checkLevelOfLubricantOilOnVisorMainGearbox",
                            "type": "checkbox",
                            "input": true,
                            "defaultValue": false
                          },
                          {
                            "label": "Refill if required with gear oil",
                            "tableView": false,
                            "key": "refillIfRequiredWithGearOil",
                            "type": "checkbox",
                            "input": true,
                            "defaultValue": false
                          }
                        ]
                      },
                      {
                        "legend": "#4 During running test check that:",
                        "key": "fieldSet5",
                        "type": "fieldset",
                        "label": "Field Set",
                        "input": false,
                        "tableView": false,
                        "components": [
                          {
                            "label": "All the automatic feeding movement are working properly",
                            "tableView": false,
                            "key": "allTheAutomaticFeedingMovementAreWorkingProperly",
                            "type": "checkbox",
                            "input": true,
                            "defaultValue": false
                          }
                        ]
                      },
                      {
                        "legend": "#5 Tailstock locking condition",
                        "key": "fieldSet6",
                        "type": "fieldset",
                        "label": "Field Set",
                        "input": false,
                        "tableView": false,
                        "components": [
                          {
                            "label": "Check tailstock locking condition. Both lever must lock properly.",
                            "tableView": false,
                            "key": "checkTailstockLockingConditionBothLeverMustLockProperly",
                            "type": "checkbox",
                            "input": true,
                            "defaultValue": false
                          }
                        ]
                      },
                      {
                        "legend": "#6 Coolant",
                        "key": "fieldSet8",
                        "type": "fieldset",
                        "label": "Field Set",
                        "input": false,
                        "tableView": false,
                        "components": [
                          {
                            "label": "Avoid contacting coolant, wear rubber gloves.",
                            "tableView": false,
                            "key": "avoidContactingCoolantWearRubberGloves",
                            "type": "checkbox",
                            "input": true,
                            "defaultValue": false
                          },
                          {
                            "label": "Check level of coolant, refill if required.",
                            "tableView": false,
                            "key": "checkLevelOfCoolantRefillIfRequired",
                            "type": "checkbox",
                            "input": true,
                            "defaultValue": false
                          }
                        ]
                      }
                    ]
                  }
                ],
                "width": 6,
                "offset": 0,
                "push": 0,
                "pull": 0,
                "size": "lg",
                "currentWidth": 6
              },
              {
                "components": [
                  {
                    "legend": "Optional checks",
                    "key": "fieldSet1",
                    "type": "fieldset",
                    "label": "Field Set",
                    "input": false,
                    "tableView": false,
                    "components": [
                      {
                        "legend": "Headstock",
                        "key": "fieldSet7",
                        "type": "fieldset",
                        "label": "Field Set",
                        "input": false,
                        "tableView": false,
                        "components": [
                          {
                            "label": "Headstock – twice a year – SHELL TELLUS 27 OR compatible",
                            "tableView": false,
                            "key": "headstockTwiceAYearShellTellus27OrCompatible",
                            "type": "checkbox",
                            "input": true,
                            "defaultValue": false
                          }
                        ]
                      }
                    ]
                  }
                ],
                "width": 6,
                "offset": 0,
                "push": 0,
                "pull": 0,
                "size": "lg",
                "currentWidth": 6
              }
            ],
            "key": "columns",
            "type": "columns",
            "input": false,
            "tableView": false
          },
          {
            "legend": "Maintenance Inspector's Personal Details",
            "key": "fieldSet9",
            "type": "fieldset",
            "label": "Field Set",
            "input": false,
            "tableView": false,
            "components": [
              {
                "label": "Columns",
                "columns": [
                  {
                    "components": [
                      {
                        "label": "Full name",
                        "tableView": true,
                        "validate": {
                          "required": true
                        },
                        "key": "fullName",
                        "type": "textfield",
                        "input": true
                      },
                      {
                        "label": "Email",
                        "tableView": true,
                        "validate": {
                          "required": true
                        },
                        "key": "email",
                        "type": "email",
                        "input": true
                      },
                      {
                        "label": "Signature",
                        "tableView": false,
                        "key": "signature",
                        "type": "signature",
                        "input": true
                      }
                    ],
                    "width": 6,
                    "offset": 0,
                    "push": 0,
                    "pull": 0,
                    "size": "sm",
                    "currentWidth": 6
                  },
                  {
                    "components": [],
                    "width": 6,
                    "offset": 0,
                    "push": 0,
                    "pull": 0,
                    "size": "sm",
                    "currentWidth": 6
                  }
                ],
                "key": "columns1",
                "type": "columns",
                "input": false,
                "tableView": false
              }
            ]
          }
        ]
      },
      {
        "type": "button",
        "label": "Submit",
        "key": "submit",
        "disableOnInvalid": true,
        "input": true,
        "tableView": false
      }
    ]
  };

  // @ViewChild('json') jsonElement?: ElementRef;

  constructor(
    private formService: FormService,
    private toastrService: NbToastrService
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
          this.toastrService.show('Form saved successfully.', 'Success', { status: NbToastStatus.SUCCESS });
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
