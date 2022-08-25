import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform } from '@ionic/angular';
import { ListMetaMedias } from './models/meta-media/list-meta-medias';
import { MetaMediaService } from './provider/meta-media/meta-media.service';
import { NotificationService } from './provider/notification.service';
import { StatusBar, Style } from '@capacitor/status-bar';

/**
 * *~~~~~~~~~~~~~~~~~~~
 * Author: HugoBlanc |
 * *~~~~~~~~~~~~~~~~~~~
 * Cette class est le point de départ de notre application
 * Elle représente donc la première page sur laquel on arrive
 * Elle gères donc certaines fonctionalité native du téléphone
 * Mais aussi la liste des média afficher dans le menu
 * *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private metaMediaService: MetaMediaService,
    private notificationService: NotificationService,
  ) {
    this.initializeApp();
  }

  appPages: ListMetaMedias[];


  initializeApp() {
    StatusBar.setOverlaysWebView({overlay: true})
    this.appPages = this.metaMediaService.listMetaMedia;

    this.platform.ready().then(() => {

      this.metaMediaService.listMetaMedia$
        .subscribe(async (listMetaMedia: ListMetaMedias[]) => {
          this.appPages = listMetaMedia;
          await this.notificationService.initOpenNotification();
          this.notificationService.initData()
            .subscribe((datas) => {
              console.log(datas);
            });
        });

      this.splashScreen.hide();
    });
  }

}
