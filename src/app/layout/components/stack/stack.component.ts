import {Component, ElementRef, HostBinding, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Component({
  selector: 'layout-stack',
  template: '<ng-content></ng-content>',
  styles: [':host {display: flex; flex-direction: column; justify-content: flex-start;}'],
})
export class StackComponent implements OnChanges {
  @HostBinding('attr.data-id') protected dataId: string;

  @Input() space: string;
  @Input() recursive = false;
  @Input() splitAfter: number;

  protected render(): void {
    this.dataId = `Stack-${[this.space, this.recursive, this.splitAfter].join('')}`;
    if (document.getElementById(this.dataId)) {
      return;
    }

    const styleEl: HTMLElement = this.renderer.createElement('style');
    styleEl.id = this.dataId;
    styleEl.innerHTML = `
        [data-id="${this.dataId}"]${this.recursive ? '' : ' >'} * + * {
          margin-top: ${this.space};
        }

        ${this.splitAfter ? `
          [data-id="${this.dataId}"]:only-child {
            height: 100%;
          }

          [data-id="${this.dataId}"] > :nth-child(${this.splitAfter}) {
            margin-bottom: auto;
          }`
      : ''}
        `.replace(/\s\s+/g, ' ').trim();
    this.renderer.appendChild(document.head, styleEl);

  }

  constructor(private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.space || changes.recursive || changes.splitAfter) {
      this.render();
    }
  }

}
