import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

public class TestDemoTest {

    Calculator calc =  new Calculator();

    @Test
    void testSum(){
        assertEquals(5, calc.sum(2,3));

        assertNotEquals(6, calc.sum(2,3));
    }

    @Test
    void testDiv(){
        assertEquals(1, calc.div(3,2));
    }
}
