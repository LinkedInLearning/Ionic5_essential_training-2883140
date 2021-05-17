import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetailsInstantPage } from './details-instant/details-instant.page';
const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
	},
	{
		path: 'details',
		loadChildren: () => import('./details-instant/details-instant.module').then(m => m.DetailsInstantPageModule)
	},
	{
		path: 'details/:id',
		component: DetailsInstantPage
	}

];
@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
