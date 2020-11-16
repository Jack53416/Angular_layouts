import {Component, HostBinding, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Component({
  selector: 'layout-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.scss'],
})
export class ClusterComponent implements OnChanges {
  @HostBinding('attr.data-id') private dataId: string;

  @Input() justify = 'flex-start';
  @Input() align = 'center';
  @Input() space = '1rem';


  private render(): void {
    this.dataId = `Cluster-${[this.justify, this.align, this.space].join('')}`;
    if (document.getElementById(this.dataId)) {
      return;
    }

    const styleEl: HTMLElement = this.renderer.createElement('style');
    styleEl.innerHTML = `
    [data-id="${this.dataId}"] > * {
      justify-content: ${this.justify};
      align-items: ${this.align};
      margin: calc(${this.space} / 2 * -1);
    }

    [data-id="${this.dataId}"] > * > * {
      margin: calc(${this.space} / 2)
    }
    `.replace(/\s\s+/g, ' ').trim();
    this.renderer.appendChild(document.head, styleEl);
  }

  constructor(private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.justify || changes.align || changes.space) {
      this.render();
    }
  }

}
