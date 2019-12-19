import {Injectable} from '@angular/core';
import {VbcardModuleConfig} from './config';

@Injectable({
  providedIn: 'root'
})
export class VbcardConfigService {
  CONFIG_OPTIONS: VbcardModuleConfig;

  constructor(moduleConfig?: VbcardModuleConfig) {
    this.CONFIG_OPTIONS = {
      ...new VbcardModuleConfig(),
      ...moduleConfig
    };
  }

  getConfig(): VbcardModuleConfig {
    return this.CONFIG_OPTIONS;
  }
}
