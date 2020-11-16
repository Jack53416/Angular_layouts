import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {StackComponent} from './components/stack/stack.component';
import { SidebarMainContentDirective } from './components/sidebar/sidebar-main-content.directive';
import { SidebarSideContentDirective } from './components/sidebar/sidebar-side-content.directive';
import { CoverComponent } from './components/cover/cover.component';
import { CenterComponent } from './components/center/center.component';


@NgModule({
  declarations: [SidebarComponent, StackComponent, SidebarMainContentDirective, SidebarSideContentDirective, CoverComponent, CenterComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    SidebarComponent,
    StackComponent,
    SidebarMainContentDirective,
    SidebarSideContentDirective,
    CoverComponent,
    CenterComponent,
  ],
})
export class LayoutModule {
}
