import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';


@Component({
    selector: 'page-icones',
    templateUrl: 'icones.html'
})

export class IconesPage {
    constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {

    }

    openMenu() {
        const actionSheet = this.actionSheetCtrl.create({
            title: 'Modiy your album',
            buttons: [
                {
                    text: 'Destructive',
                    role: 'destructive',
                    handler: () => {
                        console.log('Destructive clicked');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }

                }
            ]
        });
        actionSheet.present();
    }
}