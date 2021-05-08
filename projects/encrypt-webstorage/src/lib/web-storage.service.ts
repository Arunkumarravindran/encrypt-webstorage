import { Injectable } from '@angular/core';
import { EncryptionService } from './encryption.service';

@Injectable({
  providedIn: 'root'
})
export class WebStorageService {

  constructor(private encryption : EncryptionService) {}

	getItem(key: string): any {
    if(key)
		return JSON.parse(this.encryption.decryptionAES(sessionStorage.getItem(key) || '{}') );
    else
    return null;
	}

	setItem(key: string = 'null', value: any = null) {
		sessionStorage.setItem(key, this.encryption.encryptionAES(JSON.stringify(value)));
	}

}
