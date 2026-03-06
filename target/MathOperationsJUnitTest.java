import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class MathOperationsJUnitTest {

    MathOperations math = new MathOperations();

    @Test
    void testAdd() {
        assertEquals(5, math.add(2, 3));
    }

    @Test
    void testSubtract() {
        assertEquals(1, math.subtract(3, 2));
    }

    @Test
    void testMultiply() {
        assertEquals(6, math.multiply(2, 3));
    }

    @Test
    void testDivide() {
        assertEquals(2.5, math.divide(5, 2));
    }

    @Test
    void testDivideByZero() {
        assertThrows(ArithmeticException.class, () -> math.divide(5, 0));
    }
}