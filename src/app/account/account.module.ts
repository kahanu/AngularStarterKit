import { NgModule } from '@angular/core';

import { AccountComponent } from '../account/account.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AccountComponent],
  imports: [
    SharedModule
  ],
  exports: [AccountComponent]
})
export class AccountModule { }
