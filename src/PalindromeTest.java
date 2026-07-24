import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class PalindromeTest {

    Palindrome palindrome = new Palindrome();

    @ParameterizedTest
    @ValueSource(strings = {"madam", "racecar", "tenet"})
    void testPalindrome(String str) {

        assertTrue(palindrome.isPalindrome(str));
    }
}
