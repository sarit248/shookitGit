import { NgModule } from '@angular/core';
import { SplashComponent } from '../components/splash/splash.component';
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from '../components/main/main.component';
import { FutureOrdersComponent } from '../components/future-orders/future-orders.component';

const routes: Routes = [
    { path: "splash", component: SplashComponent },
    { path: "futureOrders/:orderId", component: FutureOrdersComponent},
    { path: "main", component: MainComponent },
    { path: "", redirectTo: "/splash", pathMatch: "full" }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],


    declarations: []
})
export class RoutingModule { }
