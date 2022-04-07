import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationGuard } from './guards/authentication-guard/authentication.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AuthenticationGuard]
})
export class CoreModule { }
