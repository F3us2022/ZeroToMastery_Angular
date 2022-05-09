import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  //---------------------------BINDING-------------------------------------
  // pageTitle: string = 'Interpolation Example';
  // imgUrl: string = 'assets/images/portfolio-branding-01-1.jpg';
  // btnStatus: boolean = false;
  // username!: string;
  // isCollapsed: boolean = true;

  // changeTitle() {
  //   this.pageTitle = 'Event Binding On click';
  // }

  //--------------------------DIRECTIVE-------------------------------------
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

  countries: any[] = [
    { code: 'IN', country: 'India' },
    { code: 'CA', country: 'Canada' },
    { code: 'UK', country: 'Britain' },
    { code: 'IR', country: 'Ireland' },
  ];

  countrySelected!: string;

  choice(e: any) {
    this.countrySelected = e.target.value;
  }

  constructor() {}

  ngOnInit(): void {}
}
