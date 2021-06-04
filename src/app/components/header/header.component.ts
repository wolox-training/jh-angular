import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() logout = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  sessionLogout(): void {
    this.logout.emit(true);
  }

}
