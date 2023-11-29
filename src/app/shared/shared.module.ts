import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { MediaPlayerComponent } from './component/media-player/media-player.component';
import { HeaderUserComponent } from './component/header-user/header-user.component';
import { CardPlayerComponent } from './component/card-player/card-player.component';
import { SectionGenericComponent } from './component/section-generic/section-generic.component';
import { PlayListHeaderComponent } from './component/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './component/play-list-body/play-list-body.component';
import { OrderListPipe } from './pipe/order-list.pipe';
import { RouterModule } from '@angular/router';
import { ImgBrokenDirective } from './directives/img-broken.directive';


@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    OrderListPipe,
    ImgBrokenDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
    OrderListPipe,
    ImgBrokenDirective
  ]
})
export class SharedModule { }
