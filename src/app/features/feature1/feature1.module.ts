import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1RoutingModule } from './feature1-routing.module';
import { Feature1Component } from './feature1.component';
import { Feature1ListComponent } from './components/feature1-list/feature1-list.component';
import { Feature1DetailComponent } from './components/feature1-detail/feature1-detail.component';


@NgModule({
  declarations: [
    Feature1Component,
    Feature1ListComponent,
    Feature1DetailComponent
  ],
  imports: [
    CommonModule,
    Feature1RoutingModule
  ]
})
export class Feature1Module { }
