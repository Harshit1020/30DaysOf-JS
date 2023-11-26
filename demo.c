#include <stdio.h>
#include <string.h>

int countallPossibleSelections(char* str, int n) {
    int cnt = 0;
    for (int i = 0; i < n; i++) {
        if (str[i] != str[i+1]) {
            cnt++;
        }
    }
    return cnt;
}

int main() {
    char str1[10001], str2[10001];
    scanf("%s", str1);
    scanf("%s", str2);
    int n1 = strlen(str1);
    int n2 = strlen(str2);
    
    if (n1 > 10000 || n2 > 10000) {
        printf("Invalid input\n");
        return 0;
    }
    
    int cnt1 = countallPossibleSelections(str1, n1);
    int cnt2 = countallPossibleSelections(str2, n2);

    if (cnt1 > cnt2) {
        printf("Ashok");
    } else if (cnt1 < cnt2) {
        printf("Anand");
    } else {
        printf("Draw");
    }
    
    return 0;
}