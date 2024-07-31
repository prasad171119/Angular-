
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        AppComponent,
        
    ],
    providers: [{
           
            multi: true
        }],
    bootstrap: [AppComponent],
    imports: [
        
        AppRoutingModule,
        RouterModule,
        
    ]
})
export class AppModule { }


