public class Palindrome {

    public boolean isPalindrome(String str) {

        String reverseStr = new StringBuilder(str).reverse().toString();

        return str.equals(reverseStr);
    }
}
