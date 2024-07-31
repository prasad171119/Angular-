import { Component,  Input, OnInit,  } from '@angular/core';
import {  Router } from '@angular/router';
import { customerService } from './customers.service';
import { errorHandlerService } from 'src/app/util/errorhandler.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  Customerdata: any

  constructor(private service: customerService, private router: Router, private errorHandler: errorHandlerService,
   ) {
   
  }

  ngOnInit(): void {
   this.getCustomerDetails();
  }

  

  

  getCustomerDetails(): void {
    this.service.getCustomerGrid().subscribe(
      res => {
        this.Customerdata = res;
      }, error => this.errorHandler.handleError(error)
    )
  }

  OnEdit(data) {
    this.onEdit = true;
    this.customerId = data.id;
  }

  getid(data) {
    this.router.navigate(['customerdetails'], { relativeTo: this.activatedRoute });
   
  }
  
  addCustomer(): void {
    this.router.navigate(['addcustomer'], { relativeTo: this.activatedRoute });
  }
  

  editCustomer(id): void {
    sessionStorage.setItem('CustomerId', id)
    this.router.navigate(['customers/customerdetails/editcustomer']);
  }

 

}
