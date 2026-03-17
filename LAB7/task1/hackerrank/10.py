
import math
import os
import random
import re
import sys

def solve(s):
    result = ""
    for i in range(len(s)):
        if i == 0 or s[i-1] == " ":
            result += s[i].upper()
        else:
            result += s[i]
    return result
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = solve(s)

    fptr.write(result + '\n')

    fptr.close()
