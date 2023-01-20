import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HomeService } from '../services/home.service';
import { Section, Question } from '../constants';
import {MatAccordion} from '@angular/material/expansion';
import { backend_json } from '../constants';
import { FormArray, FormBuilder, FormControl, FormGroup, isFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  obj = Object;
  accordionForm = this.fb.group({});
  sections: any;
  secs: Section[] = [];

  constructor(private fb: FormBuilder, private home: HomeService) { 
    this.sections = backend_json;
    for (let key of Object.keys(this.sections)) {
      console.log(this.sections[key].section_name);
    }
    // this.setInterfaces();
    this.setformgroups();
   }

  //  setInterfaces() {
  //   for (let [key, section] of Object.entries(backend_json)) {
  //     let s: Section = {
  //       section_id: key,
  //       section_name: section.section_name,
  //       questions: section.questions
  //     };
  //     this.secs.push(s);
  //   }
  //   console.log(this.secs);
  //  }

  setformgroups() {
    const controls: any = {};
    Object.keys(this.sections).forEach((key: any) => {
      this.sections[key].questions.forEach((question: any) => {
        if (String(question.comment) == 'true') {
          this.accordionForm.addControl(key + "_" + question.id, new FormControl(question.answer_type=='multi'?[]:'', question.auto_populate=='true'? null:Validators.required));
          this.accordionForm.addControl(key + "_" + question.id + "_c", new FormControl('', Validators.required));
        }
        else {
          this.accordionForm.addControl(key + "_" + question.id, new FormControl(question.answer_type=='multi'?[]:'', question.auto_populate=='true'? null:Validators.required));
        }
      })
    })

    console.log(this.accordionForm.value);
  }

   ngOnInit(): void {
   }

   submitForm() {
    console.log(this.accordionForm.value);
   }

};
