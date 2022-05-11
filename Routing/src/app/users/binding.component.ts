import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  //ngOnInit(): void {}
  //
  //------------------------------------------------- BINDING ---------------------------------------------
  // pageTitle: string = 'Interpolation Example';
  // imgUrl: string = 'assets/images/portfolio-branding-01-1.jpg';
  // btnStatus: boolean = false;
  // username!: string;
  // isCollapsed: boolean = true;
  // changeTitle() {
  //   this.pageTitle = 'Event Binding On click';
  // }
  //------------------------------------------------ DIRECTIVE ---------------------------------------------
  //**********-------NgFOR------- */
  // arrData: string[] = ['ON', 'MO', 'BC', 'NS', 'PEI'];
  // objData: any[] = [
  //   { id: 101, name: 'John', city: 'Delhi' },
  //   { id: 102, name: 'Peter', city: 'Bangalore' },
  //   { id: 103, name: 'kansis', city: 'Pune' },
  //   { id: 104, name: 'leonard', city: 'Chandigarh' },
  // ];
  //********---------NgIF-------- */
  // isLoggedIn: boolean = false;
  //********---------NgSwitch---- */
  // countries: any[] = [
  //   { code: 'IN', country: 'India' },
  //   { code: 'CA', country: 'Canada' },
  //   { code: 'UK', country: 'Britain' },
  //   { code: 'IR', country: 'Ireland' },
  // ];
  // countrySelected!: string;
  // choice(e: any) {
  //   this.countrySelected = e.target.value;
  // }
  //----------------------------------------- PARENT TO CHILD COMMUNICATION ------------------------------------------->
  // @Input()
  // uname!: string;
  //----------------------------------------- CHILD TO PARENT COMMUNICATION ------------------------------------------->
  // @Output()
  // notify: EventEmitter<string> = new EventEmitter<string>();
  // btnClicked() {
  //   this.notify.emit('This message is coming from CHILD to PARENT');
  // }
  // //------------------------------------------ PIPES (BUILT IN PIPES/CUSTOM) ---------------------------------------->
  // userData: any[] = [
  //   {
  //     id: 101,
  //     name: 'John',
  //     city: 'MUMBAI',
  //     salary: 2000000,
  //     dob: new Date('05 / 10 / 1982'),
  //   },
  //   {
  //     id: 102,
  //     name: 'Peter',
  //     city: 'DELHI',
  //     salary: 1000000,
  //     dob: new Date('05 / 10 / 1982'),
  //   },
  //   {
  //     id: 103,
  //     name: 'Dan',
  //     city: 'BANGALORE',
  //     salary: 800000,
  //     dob: new Date('02 / 03 / 1985'),
  //   },
  //   {
  //     id: 104,
  //     name: 'keneth',
  //     city: 'PUNE',
  //     salary: 602200,
  //     dob: new Date('07 / 12 / 1979'),
  //   },
  //   {
  //     id: 105,
  //     name: 'Sam',
  //     city: 'CHANDIGARH',
  //     salary: 412000,
  //     dob: new Date('04 / 07 / 1986'),
  //   },
  // ];
  //----------------------------------------------- SERVICES --------------------------------------------------------->
  // users: any[] = [];
  // constructor(private userData: UsersService) {}
  // ngOnInit() {
  //   this.users = this.userData.getAllUsers();
  // }
  //--------------------------------------------- HTTP SERVICES ----------------------------------------------------->

  // users: any;
  // constructor(private userData: HttpServiceService) {}
  // ngOnInit(): void {
  //   this.userData.exportUserData().subscribe((data) => {
  //     this.users = data;
  //     console.log(this.users[0].address.city);
  //   });
  // }

  //---------------------------------------- HTTP SERVICES - TRY/CATCH --------------------------------------------->

  users: any;
  errorMessage!: string;
  constructor(private allUserData: HttpServiceService) {}
  ngOnInit(): void {
    this.allUserData.exportUserData().subscribe(
      (data: any) => {
        this.users = data;
        console.log(this.users[0].address.city);
      },
      (err: string) => {
        this.errorMessage = err;
      }
    );
  }
}
