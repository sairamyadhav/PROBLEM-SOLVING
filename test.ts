import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { form } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sections: any;
  form = this.fb.group({});

  constructor(private fb: FormBuilder) {
    this.sections = form;
    this.setSections();
  }
  setSections() {
    const formControls: any = {};
    // for (let key of Object.keys(this.sections)) {
    //   let group = new FormGroup({})
    //   for (let question of this.sections[key].questions) {
    //     formControls[key + "-" + question.id] = new FormControl('');
    //   }
    // }
    // this.form = new FormGroup(formControls);
    // console.log(this.form.value);

    Object.keys(this.sections).forEach(sectionKey => {
      const section = this.sections[sectionKey];
      section.questions.forEach((question: any) => {
        if (String(question.comment) == 'true') {
          this.form.addControl(sectionKey + "_" + question.id + "_c", new FormControl(''));
        }
          this.form.addControl(sectionKey + "_" + question.id, new FormControl(''));
      });
      
  });
  console.log(this.form.value);
  }
}
