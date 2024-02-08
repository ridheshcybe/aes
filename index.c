/*
 * Copyright 2024 Cybe & ridhesh walavalkar.  All rights reserved.
 */
#include <stdio.h>
#include <emscripten.h>

int main()
{
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