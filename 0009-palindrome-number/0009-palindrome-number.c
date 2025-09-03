bool isPalindrome(int x) {
    long long rem=0,reverse=0;
    long long original=x;
    if (x>=0){
    while(x!=0){
    rem = x%10;
    reverse=(reverse*10)+rem;
    x=x/10 ; 
    }
    if (original==reverse){
        return true ;
    }
    else {
        return false ;
    }
    }
    else {
        return false ;
    }
}