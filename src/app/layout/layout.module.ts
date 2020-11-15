import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {StackComponent} from './components/stack/stack.component';


@NgModule({
  declarations: [SidebarComponent, StackComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    SidebarComponent,
    StackComponent,
  ],
})
export class LayoutModule {
}
