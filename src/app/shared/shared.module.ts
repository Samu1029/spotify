import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { MediaPlayerComponent } from './component/media-player/media-player.component';
import { HeaderUserComponent } from './component/header-user/header-user.component';
import { CardPlayerComponent } from './component/card-player/card-player.component';
import { SectionGenericComponent } from './component/section-generic/section-generic.component';


@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ]
})
export class SharedModule { }
