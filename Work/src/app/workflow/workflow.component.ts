import { Component, OnInit, OnDestroy } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { TypeDialogComponent } from '../type-dialog/type-dialog.component';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html'
})

export class WorkflowComponent implements OnInit, OnDestroy {
  subs = new Subscription();

  components = [];

  controls = [
    {
      name: 'input',
      value: 'Input Box'
    },
    {
      name: 'select',
      value: 'Select Box'
    },
    {
      name: 'checkbox',
      value: 'Checkbox'
    },
    {
      name: 'radio',
      value: 'Radio Button'
    },
    {
      name: 'button',
      value: 'Button'
    }
  ];

  controls1 = [];

  constructor(private dragulaService: DragulaService, public dialog: MatDialog) {
    dragulaService.createGroup("formControls", {
      // accepts: this.acceptDragulaCallback,
      revertOnSpill: true,
      removeOnSpill: true
    });

    this.subs.add(dragulaService.dropModel("formControls")
      .subscribe(({ el, target, source, sourceModel, targetModel, item }) => {
        let value = target.attributes["data-position"].nodeValue;
        if (value != 'original') {
          let controlType = el.attributes["data-controltype"].nodeValue;
          let index = this.controls.findIndex(x => x.name == controlType);
          let data = this.controls[index];
          this.controls.splice(index, 1);
          const dialogRef = this.dialog.open(TypeDialogComponent, {
            height: '40%',
            width: '20%',
            hasBackdrop: true,
            direction: 'ltr',
            data: { controlType: controlType },
            disableClose: true,
            panelClass: 'custom-modal-container'
          });
          dialogRef.afterClosed().subscribe((response: any) => {
            if (!response.success) {
              this.controls.push(data);
            }
            else {
              this.components.push({
                Name: response.controlType,
                Type: response.inputFilter,
                Value: response.inputValueFilter
              });
            }
          })
        }
      })
    );

    this.subs.add(dragulaService.removeModel("formControls")
      .subscribe(({ el, source, item, sourceModel }) => {
      })
    );
  }

  ngOnInit() {
  }

  public ngOnDestroy() {
    this.subs.unsubscribe();
    this.dragulaService.destroy("formControls");
  }
}
