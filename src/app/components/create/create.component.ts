import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {IssueService } from '../../issue.service';
import { MatSnackBar } from '@angular/material';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private issueService: IssueService, private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar ) {
    this.createForm = this.fb.group({
        title: ['', Validators.required],
        responsible: '',
        description: '',
        severity: ''
    });
  }

  addIssue(title, responsible, description, severity) {
    this.issueService.addIssue(title, responsible, description, severity).subscribe(() =>{
      this.snackBar.open('Issue created successfully', 'OK', {
        duration: 3000
      });
      this.router.navigate(['/list']);
    });
  }

  ngOnInit() {
  }

}
