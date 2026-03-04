import org.testng.annotations.Test;
import static org.testng.Assert.*;

public class MathOperationsTestNGTest {

    MathOperations math = new MathOperations();

    @Test
    public void testAdd() {
        assertEquals(math.add(2, 3), 5);
    }

    @Test
    public void testSubtract() {
        assertEquals(math.subtract(3, 2), 1);
    }

    @Test
    public void testMultiply() {
        assertEquals(math.multiply(2, 3), 6);
    }

    @Test
    public void testDivide() {
        assertEquals(math.divide(5, 2), 2.5);
    }

    @Test(expectedExceptions = ArithmeticException.class)
    public void testDivideByZero() {
        math.divide(5, 0);
    }
}