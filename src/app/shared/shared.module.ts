import { LOCALE_ID, NgModule } from '@angular/core';

import { HeaderPadraoModule } from './hearder-padrao/header-padrao.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { PrimengModule } from './primeng.module';

// configuracao do locale pt-BR
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);

// configuration ng-mask
import { NgxMaskModule, IConfig } from 'ngx-mask';
const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    PrimengModule,
    HeaderPadraoModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  exports: [HeaderPadraoModule, PrimengModule, MaterialModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class SharedModule {}
