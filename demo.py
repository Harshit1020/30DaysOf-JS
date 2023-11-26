#include"bits/stdc++.h"
using namespace std;

pair<int, int> solve(vector<vector<int>>& v, vector<vector<bool>>& vis, int countTwo, int countThree, int count, int s1, int s2, int e1, int e2) {
    if (s1 == e1 && s2 == e2) {
        return {count, countThree};
    }
    vis[s1][s2] = true;
    pair<int, int> ans = {-1, 0};
    vector<int> dir = {-1, 0, 1, 0, -1};
    for (int i = 0; i < 4; i++) {
        int news1 = s1 + dir[i];
        int news2 = s2 + dir[i + 1];
        if (news1 < (int) v.size() && news2 < (int) v[0].size() && news1 >= 0 && news2 >= 0 && v[news1][news2] != 1 && vis[news1][news2] == false) {
            if (v[news1][news2] == 2 && countTwo == 2) {
                continue;
            } else {
                int curr3 = countTwo, curr2 = countThree;
                if (v[news1][news2] == 2) {
                    curr3++;
                }
                if (v[news1][news2] == 3) {
                    curr2++;
                }
                pair<int, int> curr = solve(v, vis, curr3, curr2, count + 1, news1, news2, e1, e2);
                if (curr.first == -1) {
                    continue;
                } else if (ans.first == -1) {
                    ans = curr;
                } else if (ans.second > curr.second) {
                    ans = curr;
                } else if (ans.second == curr.second) {
                    ans.first = min(ans.first, curr.first);
                }
            }
        }
    }
    vis[s1][s2] = false;
    return ans;
}

int main() {
    int r, c;
    cin >> r >> c;
    vector<vector<int>> v(r, vector<int>(c, 0));
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            cin >> v[i][j];
        }
    }
    vector<vector<bool>> vis(r, vector<bool>(c, false));
    int s1, s2;
    cin >> s1 >> s2;
    int e1, e2;
    cin >> e1 >> e2;
    if (v[s1][s2] == 1 || v[e1][e2] == 1) {
        cout << "STUCK";
        return 0;
    }
    if (s1 == e1 && s2 == e2) {
        int ans = 0;
        cout << ans;
        return 0;
    }
    int countTwo = 0;
    if(v[s1][s2] == 2){
        countTwo++;
    }
    pair<int, int> ans = solve(v, vis, countTwo, 0, 0, s1, s2, e1, e2);
    if (ans.first == -1) {
        cout << "STUCK";
        return 0;
    }
    cout << ans.first;
    return 0;
}

