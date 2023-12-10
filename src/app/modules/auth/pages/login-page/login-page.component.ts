import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  errorSession: boolean = false
  formLogin: UntypedFormGroup = new UntypedFormGroup({});

  constructor(private authService: AuthService, private cooki: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new UntypedFormGroup(
      {
        email: new UntypedFormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new UntypedFormControl('',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ])
      }
    )
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value;
    this.authService.sendCredencials(email, password)
    .subscribe(responseOk => {
      console.log('Sesion iniciada correctamente 🆗🆗')
      const { tokenSession, data } = responseOk
      this.cooki.set('token', tokenSession, 4, '/')
      this.router.navigate(['/', 'tracks']);
      
    },
      err => {
        console.log('Error al iniciar sesion ❌❌❌')
      }
    )
  }
}
