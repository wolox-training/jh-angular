import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatBadgeModule } from '@angular/material/badge';
import { ModalService } from 'src/app/services/modal.service';



@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    MatBadgeModule
  ],
  providers: [ModalService]
})
export class HeaderModule { }
