import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material';
import { InlineSVGModule } from 'ng-inline-svg';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';

import { RemoveSpaces } from './pipes/remove-spaces';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './src/assets/i18n/', '.json');
}

@NgModule({
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    InlineSVGModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),

    BrowserAnimationsModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,

    RemoveSpaces
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
