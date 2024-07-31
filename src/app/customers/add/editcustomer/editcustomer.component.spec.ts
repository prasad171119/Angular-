import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { EditcustomerComponent } from './editcustomer.component';
import { customerService } from '../../customers.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { errorHandlerService } from 'src/app/util/errorhandler.service';
import { TeamMemberService } from 'src/app/team_member/team-member.service';
import { of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

describe('EditcustomerComponent', () => {
  let component: EditcustomerComponent;
  let fixture: ComponentFixture<EditcustomerComponent>;
  let customerServiceMock: jasmine.SpyObj<customerService>;
  let notificationServiceMock: jasmine.SpyObj<NotificationService>;
  let teamMemberServiceMock: jasmine.SpyObj<TeamMemberService>;

  beforeEach(async () => {
    const customerServiceSpy = jasmine.createSpyObj('customerService', [
      'Updatecustomerdetails',
      'getcustomerdetails'
    ]);
    const notificationServiceSpy = jasmine.createSpyObj('NotificationService', [
      'showSuccess'
    ]);
    const teamMemberServiceSpy = jasmine.createSpyObj('TeamMemberService', [
      'getrole'
    ]);

    await TestBed.configureTestingModule({
      imports: [
        AppModule,
        FormsModule,
        RouterTestingModule,
        ToastrModule.forRoot(),
        HttpClientTestingModule,
      ],
      declarations: [EditcustomerComponent],
      providers: [
        { provide: customerService, useValue: customerServiceSpy },
        { provide: NotificationService, useValue: notificationServiceSpy },
        { provide: TeamMemberService, useValue: teamMemberServiceSpy },
        errorHandlerService
      ]
    }).compileComponents();

    customerServiceMock = TestBed.inject(customerService) as jasmine.SpyObj<customerService>;
    notificationServiceMock = TestBed.inject(NotificationService) as jasmine.SpyObj<NotificationService>;
    teamMemberServiceMock = TestBed.inject(TeamMemberService) as jasmine.SpyObj<TeamMemberService>;

    fixture = TestBed.createComponent(EditcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form and fetch customer details on ngOnInit', () => {
    const getCustomerDetailsResponse = {
      id: 1,
      name: 'John Doe',
      locationName: 'Location',
      address: 'Address',
      city: 'City',
      state: 'State',
      country: 'Country',
      zipCode: '12345',
      latitude: '12.3456',
      longitude: '65.4321',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      mobile: '1234567890',
      roleId: 'role1',
      createdBy: 'admin',
      statusId: '1'
    };
    const getRoleResponse = [{ roleId: 'role1' }];

    customerServiceMock.getcustomerdetails.and.returnValue(of(getCustomerDetailsResponse));
    teamMemberServiceMock.getrole.and.returnValue(of(getRoleResponse));

    component.ngOnInit();

    expect(component.Form.value.id).toBe(1);
    expect(component.Form.value.name).toBe('John Doe');
    expect(component.getCountry).toBe('Country');
    // Add more assertions to cover other form values and variables
    expect(customerServiceMock.getcustomerdetails).toHaveBeenCalled();
    expect(teamMemberServiceMock.getrole).toHaveBeenCalled();
  });

  it('should submit form and update customer details', () => {
    const formValue = {
      id: 1,
      name: 'John Doe',
      locationName: 'Location',
      address: 'Address',
      city: 'City',
      state: 'State',
      country: 'Country',
      zipCode: '12345',
      latitude: '12.3456',
      longitude: '65.4321',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      mobile: '1234567890',
      roleId: 'role1',
      createdBy: 'admin',
      statusId: '1',
      customerId: '123',
   //   createdBy: 'admin'
    };

    component.Form.patchValue(formValue);
    customerServiceMock.Updatecustomerdetails.and.returnValue(of({ message: 'Updated successfully' }));

    component.onSubmit();

    expect(component.submitted).toBe(true);
    expect(component.Form.value.address).toBe('Address');
   // expect(component.customerService.Updatecustomerdetails).toHaveBeenCalledWith(formValue);
    expect(notificationServiceMock.showSuccess).toHaveBeenCalledWith('Updated successfully');
    // Add more assertions as per your code flow
  });

  // Add more test cases to cover other functions, conditions, and scenarios

});