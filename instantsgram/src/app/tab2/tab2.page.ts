import { Component } from '@angular/core';
import { PhotoService, Item } from '../photo.service';
import { Router } from '@angular/router';
@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

	items: Item[] = [];

	constructor(
		private router: Router,
		private photoService: PhotoService
	) {
		this.items = this.photoService.getItems();
	}

}
