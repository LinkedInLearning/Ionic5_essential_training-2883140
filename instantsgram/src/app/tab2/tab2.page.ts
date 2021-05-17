import { Component } from '@angular/core';
import { PhotoService } from '../photo.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
	items;
	constructor(private router: Router, private photoService: PhotoService) {
		this.items = this.photoService.items;
	}

	open() {
		this.router.navigateByUrl("/details");

		//this.router.navigateByUrl("['/details', '1']");
	}
}
