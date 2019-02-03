import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../components/layout/layout.component';
import { SplashComponent } from '../components/splash/splash.component';
import { RoutingModule } from './routing.module';
import { RouterModule } from '@angular/router';
import { MainComponent } from '../components/main/main.component';
import { HeadlineComponent } from '../components/headline/headline.component';
import { HttpClientModule } from "@angular/common/http";
import { DateComponent } from '../components/date/date.component';
import {MatIconModule,MatInputModule, MatButtonModule,MatCheckboxModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from '@angular/material/card';
import { FutureOrdersComponent } from '../components/future-orders/future-orders.component';


@NgModule({
    declarations: [
        LayoutComponent,
        SplashComponent,
        MainComponent,
        HeadlineComponent,
        DateComponent,
        FutureOrdersComponent,
     ],
    imports: [
        BrowserModule,
        RoutingModule,
        RouterModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatCardModule
        




    ],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule { }
