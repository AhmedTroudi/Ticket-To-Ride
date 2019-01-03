import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FollowComponent } from './follow/follow.component';
import { PopularComponent } from './popular/popular.component';
import { IconboxesComponent } from './iconboxes/iconboxes.component';
import { SearchComponent } from './search/search.component';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

import {FormsModule} from '@angular/forms';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import {HttpClientModule} from '@angular/common/http';
import { CustomerDashComponent } from './customer-dash/customer-dash.component';
import { UserListComponent } from './user-list/user-list.component';
import {MatButtonModule,  MatCardModule, MatCheckboxModule, MatListModule, MatButtonToggleModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    GalleryComponent,
    FollowComponent,
    PopularComponent,
    IconboxesComponent,
    SearchComponent,
    SliderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserComponent,
    CustomerDashComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule,
    MatButtonToggleModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
