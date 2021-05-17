import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
	{
		path: '',
		component: TabsPage,
		children: [
			{
				path: 'accueil',
				loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
			},
			{
				path: 'instants',
				loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
			},
			{
				path: 'ajouter',
				loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
			},
			{
				path: '',
				redirectTo: '/accueil',
				pathMatch: 'full'
			}
		]
	},
	{
		path: '',
		redirectTo: '/accueil',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
