import { Component, OnInit } from '@angular/core';
import { GivenQuotationsService } from 'src/app/services/givenquotations.service';
import { HttpClient } from 'selenium-webdriver/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage implements OnInit {
  givenTasksForm: any;
  givenTasks: any;


  constructor( public givenquotations: GivenQuotationsService, private formBuilder: FormBuilder) {



    this.givenTasksForm = this.formBuilder.group({
      "taskListKind": 2,
      "take": 2147483647,
      

    });
  }

  ngOnInit() {
    this.getGivenTasks();

  }


  async getGivenTasks() {

    return this.givenquotations.getGivenTasks(this.givenTasksForm.value).subscribe(data=>{this.givenTasks=data

    });
  }
}
