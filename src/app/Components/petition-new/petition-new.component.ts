import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PetitionService } from 'src/app/Services/Petition.Service';

@Component({
  selector: 'app-petition-new',
  templateUrl: './petition-new.component.html',
  styleUrls: ['./petition-new.component.sass']
})
export class PetitionNewComponent implements OnInit {

  submitted = false;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    public petitionForm: FormGroup,
    private petitionService: PetitionService
  ) { 
    this.mainForm();
  }

  ngOnInit(): void {
  }

  get myForm(){
    return this.petitionForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.petitionForm.valid) {
      //return false;
    } else {
      this.petitionService.createPetition(this.petitionForm.value).subscribe(
        (res) => {
          console.log('Petition successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/petitions'))
        }, (error) => {
          console.log(error);
        });
    }
  }

  mainForm() {
    this.petitionForm = this.fb.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
      banner: ['', [Validators.required]],
      petitioner_email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      petitioner_name: ['', [Validators.required]],
      petitioner_contact: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }
  

}
