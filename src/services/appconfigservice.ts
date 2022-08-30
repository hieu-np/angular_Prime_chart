import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { AppConfig } from "src/models/appconfig";

@Injectable()
export class AppConfigService {

  config: AppConfig = {
    // theme: 'lara-light-blue',
    theme: 'bootstrap4-dark-blue',
    dark: true,
    inputStyle: "outlined",
    ripple: true
  };

  private configUpdate = new Subject<AppConfig>();
  configUpdate$ = this.configUpdate.asObservable();

  updateConfig(config: AppConfig) {
    this.config = config;
    this.configUpdate.next(config);
  }

  getConfig() {
    return this.config;
  }

}