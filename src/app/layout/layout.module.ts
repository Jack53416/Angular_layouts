import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {StackComponent} from './components/stack/stack.component';
import { SidebarMainContentDirective } from './components/sidebar/sidebar-main-content.directive';
import { SidebarSideContentDirective } from './components/sidebar/sidebar-side-content.directive';
import { CoverComponent } from './components/cover/cover.component';


@NgModule({
  declarations: [SidebarComponent, StackComponent, SidebarMainContentDirective, SidebarSideContentDirective, CoverComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    SidebarComponent,
    StackComponent,
    SidebarMainContentDirective,
    SidebarSideContentDirective,
    CoverComponent,
  ],
})
export class LayoutModule {
}
