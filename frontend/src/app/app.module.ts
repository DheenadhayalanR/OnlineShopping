import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// user import modules---->
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// components --->
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';




@NgModule({
  declarations: [ 
                AppComponent,
                HomeComponent,
                ProfileComponent,
               ],
  imports: [
                BrowserModule, 
                IonicModule.forRoot(), 
                AppRoutingModule,
                HttpClientModule,
                FormsModule
              ],
              
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
