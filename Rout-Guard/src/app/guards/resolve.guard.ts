import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { HttpServiceService } from '../services/http-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResolveGuard implements Resolve<any> {
  constructor(private allUserData: HttpServiceService) {}
  resolve() {
    return this.allUserData.exportUserData();
  }
}
