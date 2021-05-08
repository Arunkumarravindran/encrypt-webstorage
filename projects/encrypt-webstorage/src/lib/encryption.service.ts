import { Injectable } from "@angular/core";
import * as CryptoTS from 'crypto-ts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class EncryptionService {

  key : string = 'z!!!!!!!1sdfadsf56adf456asdfasdf';

  constructor(private http : HttpClient) {
    // this.http.get('../asset/secret.txt',{ responseType: 'text' as 'json'}).pipe().subscribe(content =>{
    //   this.key = atob(content.toString());
    // });
  }

  encryptionAES (value : string , key: string = this.key) {
    // Encrypt
    const ciphertext = CryptoTS.AES.encrypt(value, key);
    return ciphertext.toString();
    
  }

  decryptionAES (value : string, key: string = this.key) {
    // Decrypt
    if(value){
    const bytes  = CryptoTS.AES.decrypt(value, key);
    const plaintext = bytes.toString(CryptoTS.enc.Utf8);
    return plaintext;
  }else{
    return '{}';
  }
  }
}