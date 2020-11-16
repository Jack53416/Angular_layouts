import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {StackComponent} from './components/stack/stack.component';
import { SidebarMainContentDirective } from './components/sidebar/sidebar-main-content.directive';
import { SidebarSideContentDirective } from './components/sidebar/sidebar-side-content.directive';
import { CoverComponent } from './components/cover/cover.component';
import { CenterComponent } from './components/center/center.component';
import { ClusterComponent } from './components/cluster/cluster.component';


@NgModule({
  declarations: [SidebarComponent, StackComponent, SidebarMainContentDirective, SidebarSideContentDirective, CoverComponent, CenterComponent, ClusterComponent],
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
    ClusterComponent,
  ],
})
export class LayoutModule {
}
