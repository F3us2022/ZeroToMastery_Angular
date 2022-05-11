import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  idValue!: number;
  userData!: any;
  constructor(
    private route: ActivatedRoute,
    private userHttpService: HttpServiceService
  ) {}

  ngOnInit(): void {
    this.idValue = this.route.snapshot.params['id'];
    this.userHttpService.exportDetailedUserData(this.idValue).subscribe((D) => {
      console.log(D);
      this.userData = D;
    });
  }
}
