import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../services/workflow.service';

@Component({
  selector: 'app-resultant-workflow',
  templateUrl: './resultant-workflow.component.html'
})

export class ResultantWorkflowComponent {
  components = [];

  constructor(private workFlowService: WorkflowService) {
    this.components = this.workFlowService.components;
  }
}
