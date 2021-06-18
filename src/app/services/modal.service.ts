import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class ModalService {

  private display: Subject<'close' | 'open'> = new Subject();

  lockScroll() {
    document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
  }

  close() {
    this.display.next('close');
    this.unLockScroll();
  }

  open() {
    this.display.next('open');
    this.lockScroll();
  }

  unLockScroll() {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    body.style.height = '';
    body.style.overflowY = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }

  watch(): Observable<'open' | 'close'> {
    return this.display.asObservable();
  }
}
