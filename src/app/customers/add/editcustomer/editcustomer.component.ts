import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { customerService } from '../../customers.service';
import { errorHandlerService } from 'src/app/util/errorhandler.service';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {
  Form: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, private errorHandler: errorHandlerService,
    private router: Router,private customerService:customerService) {
     
  }
  ngOnInit() {
    this.Form = this.formBuilder.group({
      id:[],
      firstName:[''],
      lastName:[''],
      email:[''],
      mobile: [''],
      
    })
 
    this.getCustomerDetails();
  }

  get f() { return this.Form.controls; }

 
  onSubmit() {
    this.submitted = true;
     this.customerService.Updatecustomerdetails(this.Form.value).subscribe(
      res => {
        this.data = res;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['customers']).then(() => {
          sessionStorage.setItem('fromEditCustomer', 'true');
        });
    });
      }, error => this.errorHandler.handleError(error)
    )
  }

  

  validateForm(form: any) {
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      control.markAsTouched({ onlySelf: true });
    });
  }


  

  
 


  getCustomerDetails():void {

    this.customerService.getcustomerdetails(this.id).subscribe(
      res => {
          this.data=res;
         

      },error => this.errorHandler.handleError(error)
    )};
    
}

