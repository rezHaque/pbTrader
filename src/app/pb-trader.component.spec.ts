import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PbTraderAppComponent } from '../app/pb-trader.component';

beforeEachProviders(() => [PbTraderAppComponent]);

describe('App: PbTrader', () => {
  it('should create the app',
      inject([PbTraderAppComponent], (app: PbTraderAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'pb-trader works!\'',
      inject([PbTraderAppComponent], (app: PbTraderAppComponent) => {
    expect(app.title).toEqual('pb-trader works!');
  }));
});
