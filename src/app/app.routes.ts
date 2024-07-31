import { Routes } from '@angular/router';
import {AddcustomerComponent} from "customer";
import {EditcustomerComponent  } from "customer";
export const routes: Routes = [
     {path: 'customers',
    children: [
      { path: 'addcustomer', component: AddcustomerComponent },
      { path: 'editcustomer', component: EditcustomerComponent},
   ]}]
