import { Plugins, CameraResultType } from '@capacitor/core';

const { Camera } = Plugins;

export class PhotoService {

	/*items = [
		{
			id: 1,
			title: "Miami Beach",
			description: "Un coucher de soleil magnifique ",
			location: "Floride, US",
			image: "../../assets/images/plage.jpeg"
		},
		{
			id: 2,
			title: "Camping",
			description: "On se ressource en pleine nature !",
			location: "Alberta, Canada",
			image: "../../assets/images/camping.jpeg"
		},
		{
			id: 3,
			title: "Barbecue entre copains",
			description: "Un bon repas avec les copains",
			location: "Pyrénées, France",
			image: "../../assets/images/barbecue.jpeg"
		},
	]*/
	public items: Item[] = [];

	public photos: Photo[] = [];

	constructor() {
	}


	addItem(item: Item) {
		this.items.push(item);
		return this.items;
	}

	getItems() {
		return this.items;
	}

	getItemById(id: Number) {
		return this.items.find(x => x.id === id);
	}

	public async takePicture() {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: true,
			resultType: CameraResultType.Uri
		});

		this.photos.unshift(
			{
				filepath: "img-" + Date.now(),
				webviewPath: image.webPath
			}
		)
	}

}

export interface Photo {
	filepath: string;
	webviewPath: string;
}

export interface Item {
	id: number,
	title: string,
	description: string,
	location: string,
	image: Photo[]
}