#include <openssl/conf.h>
#include <openssl/evp.h>
#include <openssl/err.h>
#include <string.h>
#include <emscripten.h>

/**
 * encrypt function
 * give plaintext length & data
 * give string key
 * give string iv
*/
EMSCRIPTEN_KEEPALIVE
char *encrypt(unsigned char *plaintext, int plaintext_len, unsigned char *key, unsigned char *iv)
{
    EVP_CIPHER_CTX *ctx;

    int len;
    char *ciphertext;
    int ciphertext_len;

    if (!(ctx = EVP_CIPHER_CTX_new()))
        return "ENCRYPTTION_CIPHER_CTX_CREATE_ERROR";

    if (1 != EVP_EncryptInit_ex(ctx, EVP_aes_256_cbc(), NULL, key, iv))
        return "ENCRYPTION_INIT_FAILURE";

    if (1 != EVP_EncryptUpdate(ctx, ciphertext, &len, plaintext, plaintext_len))
        return "ENCRYPTION_UPDATE_FAILURE";
    ciphertext_len = len;

    if (1 != EVP_EncryptFinal_ex(ctx, ciphertext + len, &len))
        return "ENCRYPTION_FINAL_FAILURE";
    ciphertext_len += len;

    EVP_CIPHER_CTX_free(ctx);

    char *output = ciphertext_len + '()' + ciphertext;

    return output;
}

/**
 * decrypt function
 * give ciphertext length & data
 * give string key
 * give string iv
*/
EMSCRIPTEN_KEEPALIVE
char *decrypt(unsigned char *ciphertext, int ciphertext_len, unsigned char *key, unsigned char *iv)
{
    EVP_CIPHER_CTX *ctx;

    int len;
    int plaintext_len;
    char *plaintext;

    if (!(ctx = EVP_CIPHER_CTX_new()))
        return "DECRYPTION_CIPHER_CTX_CREATE_ERROR";

    if (1 != EVP_DecryptInit_ex(ctx, EVP_aes_256_cbc(), NULL, key, iv))
        return "DECRYPTION_INIT_FAILURE";

    if (1 != EVP_DecryptUpdate(ctx, plaintext, &len, ciphertext, ciphertext_len))
        return "DECRYPTION_UPDATE_FAILURE";
    plaintext_len = len;

    if (1 != EVP_DecryptFinal_ex(ctx, plaintext + len, &len))
        return "DECRYPTION_FINAL_FALIURE";
    plaintext_len += len;

    EVP_CIPHER_CTX_free(ctx);

    char *output = plaintext_len + '()' + plaintext;

    return output;
}

int main(){
    return 0;
}