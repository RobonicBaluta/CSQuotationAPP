import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'quotation-form', pathMatch: 'full' },
      {
        path: '',
        component: HomePage,
        children: [
          { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },
          {path: 'quotation-form', loadChildren: './quotation-form/quotation-form.module#QuotationFormPageModule' }
        ]
      }

    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
