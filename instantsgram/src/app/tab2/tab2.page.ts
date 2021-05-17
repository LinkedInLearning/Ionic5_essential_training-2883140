import { Component } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
	items;
	constructor(private photoService: PhotoService) {
		this.items = this.photoService.items;
	}

}
