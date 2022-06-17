import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: '',
  templateUrl: './login.component.html',
  styles: [`
		
	`]
})

export class LoginComponent
{
  userName: string = '';
  password: string = '';

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
