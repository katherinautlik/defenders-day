<template>
  <div class="hello">
    <h1>Here you can find the gift.. probably :)</h1>

    <section v-if="decryptedData">
      <h2>Great success!</h2>
      <object type="application/pdf" :data="getPdfObject()" width="500px" height="700px" />
    </section>
    <section v-else>
      <h3>First, you need to decrypt it, have a look at the code :*</h3>
    </section>
  </div>
</template>

<script>
  import SimpleCrypto from 'simple-crypto-js';
  import CONST from '../constants/constants.js';

  export default {
    name: 'Gift',
    data: function () {
      return {
        decryptedData: '',
      }
    },
    methods: {
      getPdfObject: function () {
        return `data:application/pdf;base64, ${this.decryptedData}`;
      }
    },
    created() {
      this.decryptedData = decrypt();
    }
  }

  /**
   * Decrypts cipher data with a secret key.
   *
   * Secret key is date our relationship was started :D
   * Format: MM/DD/YYYY
   *
   * PS: I hope, I found the right date according to the theory you mentioned.
   * PPS: Good luck :)
   *
   * @returns {String}
   */
  function decrypt() {
    // TODO: Define secretKey variable, check jsdoc for more details
    const secretKey = '';
    const simpleCrypto = new SimpleCrypto(secretKey);

    let result = '';

    try {
      result = simpleCrypto.decrypt(CONST.CIPHER);
    } catch (e) {
      console.error('Data could not be decrypted. Please make sure the secret key is correct.');
    }

    return result;
  }
</script>
