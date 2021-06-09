import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title: string = '';

  display$!: Observable<'open' | 'close'>;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.display$ = this.modalService.watch();
  }

  close() {
    this.modalService.close();
  }

}
