import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { AuthRouting } from './auth-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AuthRouting,
    TranslateModule,
  ],
})
export class AuthModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faKey);
  }
}
