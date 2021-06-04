import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() logout = new EventEmitter<boolean>();

  sessionLogout(): void {
    this.logout.emit(true);
  }

}
