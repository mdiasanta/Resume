import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatTooltipModule } from '@angular/material';

import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
/*
From the latest master, HttpClientModule is required instead
import { HttpClientModule } from '@angular/common/http';
*/
import { MatIconRegistry } from '@angular/material';

import{RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import { trigger, style, transition, animate, group }
    from '@angular/animations';

import { ClipboardModule } from 'ngx-clipboard';    

import {MatGridListModule} from '@angular/material/grid-list';

import {SlideshowModule} from 'ng-simple-slideshow';

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function httpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
   return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ResumeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    MatCardModule,
    
    HttpClientModule,
    MatTooltipModule,
    ClipboardModule,

    MatGridListModule,

    SlideshowModule,
   //
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {path:'home', component:HomeComponent} ,
      {path:'about', component:AboutComponent} ,
      {path:'resume', component:ResumeComponent}/*,
      {path:'', component:LinkedInComponent}
      {path:'', component:GitHubComponent} */
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')); // Or whatever path you placed mdi.svg at
    //http://materialdesignicons.com/
  }
}
