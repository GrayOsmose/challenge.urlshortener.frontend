import {
  NgModule
} from '@angular/core';

import { HttpModule } from '@angular/http';

import { NoContentComponent } from './no-content';
import { UrlService } from './data/url/url.service';
import { UserService } from './data/user/user.service';

@NgModule({
  declarations: [
    NoContentComponent
  ],
  exports: [
    NoContentComponent
  ],
  imports: [
    HttpModule
  ],
  providers: [
    UrlService,
    UserService
  ]
})
export class CommonModule {
}
