import { NgModule } from '@angular/core';

import { PackagesRoutingModule } from './packages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PackageTableComponent } from './package-table/package-table.component';
import { PackagesPageComponent } from './packages-page/packages-page.component';
import {
  MatSortModule,
  MatPaginatorModule,
  MatTableModule
} from '@angular/material';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    PackageTableComponent,
    PackagesPageComponent,
    PackageDetailsComponent
  ],
  imports: [
    PackagesRoutingModule,
    SharedModule,
    MarkdownModule.forChild(),
    MatSortModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class PackagesModule {}