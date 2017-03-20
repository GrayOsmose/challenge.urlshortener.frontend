import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'url',
  providers: [
  ],
  styleUrls: [ './url.component.scss' ],
  templateUrl: './url.component.html'
})
export class UrlComponent {
  public changeUrl(url: string): void {

    console.log(url);
  }
}
