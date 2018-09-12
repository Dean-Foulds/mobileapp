import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private afAth: AngularFireAuth, public toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.afAth.authState.subscribe(data => {
      if (data.email && data.uid) {
        this.toast.create({
          message: 'Welcome ${this.user.email} to your profile',
          duration: 4000
        }).present();
      }
      else {
        this.toast.create({
          message: 'You are not authenticated',
          duration: 4000
        }).present();
      }
    }
    );
  }
}