import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgxMasonryModule } from 'ngx-masonry';
import { AthLoaderComponent } from './ath-loader/ath-loader.component';
import { CardComponent } from './card/card.component';
import { HeaderModalComponent } from './header-modal/header-modal.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { ImgComponent } from './img/img.component';
import { MediaNotifToggleComponent } from './media-notif-toggle/media-notif-toggle.component';
import { SectionComponent } from './section/section.component';
import { Slides3dComponent } from './slides3d/slides3d.component';
import { YoutubeIframeComponent } from './youtube-iframe/youtube-iframe.component';

@NgModule({
  declarations: [AthLoaderComponent,
    HorizontalComponent,
    CardComponent,
    MediaNotifToggleComponent,
    ImgComponent,
    YoutubeIframeComponent,
    Slides3dComponent,
    SectionComponent,
    HeaderModalComponent
  ],
  exports: [AthLoaderComponent,
    HorizontalComponent,
    CardComponent,
    MediaNotifToggleComponent,
    ImgComponent,
    YoutubeIframeComponent,
    Slides3dComponent,
    SectionComponent,
    HeaderModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    NgxMasonryModule,
    RouterModule
  ]
})
export class ComponentsModule { }
