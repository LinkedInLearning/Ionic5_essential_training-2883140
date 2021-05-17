import { Component } from '@angular/core';
import { PhotoService } from '../photo.service';
@Component({
	selector: 'app-tab3',
	templateUrl: 'tab3.page.html',
	styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

	constructor(private photoService: PhotoService) { }

	addPhotoToGallery() {
		this.photoService.takePicture();
	}
}
