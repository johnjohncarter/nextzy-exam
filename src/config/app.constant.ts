import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
  public Server = 'https://jsonplaceholder.typicode.com/';
  public ApiUrl = 'api/';
  public ServerWithUrl = this.Server;
  public ServerWithApiUrl = this.Server + this.ApiUrl;
}
