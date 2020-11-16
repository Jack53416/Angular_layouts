import {Component, HostBinding, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';

@Component({
  selector: 'layout-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
})
export class CoverComponent implements OnInit, OnChanges {
  @HostBinding('attr.data-id') protected dataId: string;

  @Input() centered = 'h1';
  @Input() space = '1.5rem';
  @Input() minHeight = '100vh';
  @Input() noPad = false;

  constructor(private renderer: Renderer2) {
  }

  private render(): void {
    this.dataId = `Cover-${[this.centered, this.space, this.minHeight, this.noPad].join('')}`;
    if (document.getElementById(this.dataId)) {
      return;
    }

    const styleEl: HTMLElement = this.renderer.createElement('style');
    styleEl.id = this.dataId;
    styleEl.innerHTML = `
          [data-id="${this.dataId}"] {
            min-height: ${this.minHeight};
            padding: ${!this.noPad ? this.space : '0'};
          }

          [data-id="${this.dataId}"] > * {
            margin-top: ${this.space};
            margin-bottom: ${this.space};
          }

          [data-id="${this.dataId}"] > :first-child:not(${this.centered}) {
            margin-top: 0;
          }

          [data-id="${this.dataId}"] > :last-child:not(${this.centered}) {
            margin-bottom: 0;
          }

          [data-id="${this.dataId}"] > ${this.centered} {
            margin-top: auto;
            margin-bottom: auto;
          }
        `.replace(/\s\s+/g, ' ').trim();
    this.renderer.appendChild(document.head, styleEl);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.centered || changes.space || changes.minHeight || changes.noPad) {
      this.render();
    }
  }

  ngOnInit(): void {
    this.render();
  }

}
