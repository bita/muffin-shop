import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthResponseData, AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent implements OnInit {
  isLoading = false;
  error: string = null;
  isLoginMode = true;
  signupForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onHandleError() {
    this.error = null;
  }

  onSubmit() {
    this.isLoading = true;
    let authobservable: Observable<AuthResponseData>;

    if (!this.signupForm.valid) {
      return;
    }

    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;

    if (this.isLoginMode) {
      this.isLoading = false;
      authobservable = this.authService.login(email, password);
    } else {
      authobservable = this.authService.signup(email, password);
    }

    authobservable.subscribe({
      next: (res: AuthResponseData) => {
        this.isLoading = false;
        this.router.navigate(['/products']);
      },
      error: (errorMessage) => {
        console.log(errorMessage);
        this.isLoading = false;
        this.error = errorMessage;
      },
    });

    this.signupForm.reset();
  }
}
