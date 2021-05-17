import { Component } from '@angular/core';
import { PhotoService, Item } from '../photo.service';

@Component({
	selector: 'app-tab3',
	templateUrl: 'tab3.page.html',
	styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

	items: Item[] = [];
	newItem: Item = <Item>{};

	constructor(private photoService: PhotoService) { }

	addPhotoToGallery() {
		this.photoService.takePicture();
	}

	loadItems() {
		this.items = this.photoService.getItems();
	}

	addItems() {
		this.newItem.id = Date.now();
		this.newItem.image = this.photoService.photos;
		this.photoService.addItem(this.newItem)
		this.newItem = <Item>{};
		this.photoService.photos = [];
		this.loadItems();

	}
}
