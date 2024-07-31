import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';
import { customerService } from '../customers.service';

@Component({
  selector: 'app-activecustomer',
  templateUrl: './activecustomer.component.html',
  styleUrls: ['./activecustomer.component.css']
})
export class ActivecustomerComponent implements OnInit {

  id:any
  @Input () activeCustomer :string;
  constructor(private service: customerService, private router: Router,private notification: NotificationService) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem('CustomerId');
  }

  delete(){
    var body = {
      "id": this.id,
      "StatusId": 1
    }
    this.service.updatecustomerstatus(body).subscribe({
      next: (response) => {
        this.router.navigate(['/customers'])

      }
    })
  }

  

  
}
