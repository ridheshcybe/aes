/*
 * Copyright 2024 Cybe & ridhesh walavalkar.  All rights reserved.
 */
#include <stdio.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int main()
{
    printf("hello, world!\n");
    return 0;
};

EMSCRIPTEN_KEEPALIVE
char *encrypt(char *key, char *text)
{
    return "ij";
}

EMSCRIPTEN_KEEPALIVE
char *decrypt(char *key, char *text)
{
    return "hi";
}