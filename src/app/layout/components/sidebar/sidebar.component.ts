import {Component, HostBinding, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';

@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnChanges {
  @HostBinding('attr.data-id') protected dataId: string;

  @Input() sideWidth = '10rem';
  @Input() contentMin = '50%';
  @Input() noStretch = false;

  @Input()
  set space(value: string) {
    this.adjustedSpace = value === '0' ? '0px' : value;
  }

  private adjustedSpace = '0px';

  constructor(private renderer: Renderer2) {
  }

  private render(): void {
    this.dataId = `Sidebar-${[this.sideWidth, this.contentMin, this.space].join('')}`;
    if (document.getElementById(this.dataId)) {
      return;
    }
    const styleEl = this.renderer.createElement('style');
    styleEl.innerHTML = `
          [data-id="${this.dataId}"] > * {
            margin: calc(${this.adjustedSpace} / 2 * -1);
            ${this.noStretch ? 'align-items: flex-start;' : ''}
          }

          [data-id="${this.dataId}"] > * > * {
            margin: calc(${this.adjustedSpace} / 2);
            ${this.sideWidth ? `flex-basis: ${this.sideWidth};` : ''}
          }

          [data-id="${this.dataId}"] > * > [sidebarMainContent] {
            flex-basis: 0;
            flex-grow: 999;
            min-width: calc(${this.contentMin} - ${this.adjustedSpace});
          }
        `.replace(/\s\s+/g, ' ').trim();
    this.renderer.appendChild(document.head, styleEl);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.sideWidth || changes.contentMin || changes.noStretchnoStretch) {
      this.render();
    }
  }

}
