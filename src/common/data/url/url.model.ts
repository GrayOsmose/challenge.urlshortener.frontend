export class UrlModel {
  public url: string = null;

  public isValid(): boolean {

    // no need to validate pattern, you can shorten what you want
    // in normal case check pattern as well
    return this.url !== null &&
           this.url.length > 0;
  }
}
