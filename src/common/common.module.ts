import {
  NgModule
} from '@angular/core';

// App is our top level component
import { NoContentComponent } from './no-content';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  declarations: [
    NoContentComponent
  ],
  exports: [
    NoContentComponent
  ]
})
export class CommonModule {
}
