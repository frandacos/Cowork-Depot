import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CarouselModule

    ],
    declarations: [
        HomeComponent,
    ],
})
export class HomeModule { }
