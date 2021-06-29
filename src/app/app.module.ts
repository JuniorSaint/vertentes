import { LOCALE_ID, NgModule } from '@angular/core';
import { PrimengModule } from './shared/primeng.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './shared/material.module';

import { HomeComponent } from './core/home/home.component';
import { BaseboardComponent } from './core/baseboard/baseboard.component';
import { TopMenuComponent } from './core/top-menu/top-menu.component';
import { ProductDetailComponent } from './core/product-detail/product-detail.component';
import { OrdemCompraComponent } from './core/purchase-order/ordem-compra.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe, registerLocaleData } from '@angular/common';

// configuracao do locale pt-BR
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);

// configuration ng-mask
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BaseboardComponent,
    TopMenuComponent,
    ProductDetailComponent,
    OrdemCompraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutModule,
    MaterialModule,
    PrimengModule,
    NgxMaskModule.forRoot(maskConfig),
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }, CurrencyPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
