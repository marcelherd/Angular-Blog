import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from '../in-memory-data.service';

@NgModule({
  imports: [ InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 0 }) ],
  exports: [ InMemoryWebApiModule ]
})
export class AppMemoryModule { }
