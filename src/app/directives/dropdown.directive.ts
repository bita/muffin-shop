import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('click') toggleDropdown() {
    this.isOpen = !this.isOpen;
    const childElement = this.elementRef.nativeElement.querySelector('.dropdown-menu');
    childElement.classList.toggle('show', this.isOpen);
  }
}
