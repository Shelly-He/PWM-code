import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//For enabling production mode:
//

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
