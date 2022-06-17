import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: '',
  templateUrl: './login.component.html',
  styles: [`
		em.required { float: right; color: #E05C65; padding-left: 10px; }
	`]
})

export class LoginComponent
{
  userName!: string;
  password!: string;
  mouseoverLogin: boolean = false;

  constructor(private authService: AuthService, private router: Router)
  {

  }

  login(formValues: any): void
  {
    this.authService.loginUser(formValues.userName, formValues.password);
    console.log(`Logging in user: ${ formValues.userName }`);
    this.router.navigate(['events']);
  }

  cancel()
  {
    this.router.navigate(['events']);
  }
}
