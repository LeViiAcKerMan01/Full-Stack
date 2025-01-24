#include<bits/stdc++.h>
using namespace std;
bool isPal(string s){
        int left = 0;
        int right = s.size()-1;
        while(left <= right){
            if(s[left] != s[right]){
                return false;
            }
            left++;
            right--;
        }
    }

int main(){
    string s = "1a2";
    string pal = "";
        int n = s.size();
        for(int i = 0; i < n; i++){
            if(s[i] >= 65 && s[i] <= 90 ){
                pal += s[i];
            }
            else if(s[i] >= 97 && s[i] <= 122){
                pal += s[i];
            }
        }
        cout<<pal<<endl;
}