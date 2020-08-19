import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../services/workflow.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultant-workflow',
  templateUrl: './resultant-workflow.component.html'
})

export class ResultantWorkflowComponent {
  components = [];

  constructor(private workFlowService: WorkflowService, private router: Router) {
    this.components = this.workFlowService.components;
  }

  downloadCode() {
    var element = document.createElement('a');
    element.setAttribute('href', 'app/resultant-workflow/resultant-workflow.component.html');
    element.setAttribute('download', 'workflow.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    var element = document.createElement('a');
    element.setAttribute('href', 'app/resultant-workflow/resultant-workflow.component.ts');
    element.setAttribute('download', 'workflow_ts.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    var element = document.createElement('a');
    element.setAttribute('href', '/styles.scss');
    element.setAttribute('download', 'styles.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  goToMainPage() {
    this.router.navigateByUrl('');
  }
}
