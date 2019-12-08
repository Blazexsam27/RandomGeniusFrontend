import { TestBed } from '@angular/core/testing';

import { InfoTransferService } from './info-transfer.service';

describe('InfoTransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoTransferService = TestBed.get(InfoTransferService);
    expect(service).toBeTruthy();
  });
});
