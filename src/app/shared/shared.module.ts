import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from './icons/icons.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule
  ]
})
export class SharedModule { }
