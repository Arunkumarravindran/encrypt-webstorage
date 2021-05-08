# Encrypted Web Storage

Encrypted Web Storage is a Angular typescript library for setting a session value(Session Storage)  with AES encryption. Also it can deal with normal AES encryption decryption( Any values) with or without secret. For the both Session and Normal encryption you can pass your own secret key in argument or it will take a default key.

[![Known Vulnerabilities](https://snyk.io/test/npm/encrypt-webstorage/0.0.4/badge.svg)](https://snyk.io/test/npm/encrypt-webstorage/0.0.4)

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install Encrypted Web Storage.

```npm
npm install encrypt-webstorage@latest
```
 or 

```npm
npm install --legacy-peer-deps --save encrypt-webstorage@latest
```


## Usage

#### For session storage encryption ########

```javascript
import {WebStorageService} from "encrypt-webstorage";

constructor(private webStorage : WebStorageService){}

// setting the value in session storage
this.webStorage.setItem('test','test'); // U2FsdGVkX1+cLZpklSZLV2mptR9S/px4TtOMBjIeOUU=
this.webStorage.setItem('test',10);
this.webStorage.setItem('test',{"test" : "test"});
// can able to pass all the types code will handle stringify and parse

// get the value back from session
this.webStorage.setItem('test'); //test
```
#### For normal encryption ########

```javascript
import {EncryptionService} from "encrypt-webstorage";

constructor(private encryptor : EncryptionService){}

const secret_key = "!!34fffd99kdsdnn@as"

// encrypt decryption value without secret key

   let encryptedString = this.encryptor.encryptionAES({"test" : "test"});

    console.log('encrypted',encryptedString); //encrypted U2FsdGVkX19qgGyDwcinGl24YVn1e7fmcdR3t/v43BA=

    let decryptedValue = this.encryptor.decryptionAES(encryptedString);

    console.log('decrypted',decryptedValue); //decrypted {test: "test"}

// encrypt decryption value without secret key

 this.encryptor.encryptionAES({"test" : "test"}, secret_key);

 this.encryptor.decryptionAES(encryptedString, secret_key);


// can able to pass all the types code will handle stringify and parse

```
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
