import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {
  components = [
    {
      Name: 'input',
      Type: 'text',
      Value: 'Sample'
    },
    {
      Name: 'select',
      Type: '',
      Value: ''
    },
    {
      Name: 'checkbox',
      Type: '',
      Value: ''
    },
    {
      Name: 'button',
      Type: 'submit',
      Value: 'Done'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
