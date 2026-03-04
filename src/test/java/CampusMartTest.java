import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class CampusMartTest {

    ProductService productService;
    CartService cartService;

    @BeforeEach
    void setup() {
        productService = new ProductService();
        cartService = new CartService();
    }

    // PRODUCT TESTS
    @Test
    void testAddProduct() {
        Product p = productService.addProduct("Laptop", 45000);
        assertEquals("Laptop", p.getName());
        assertEquals(45000, p.getPrice());
    }

    @Test
    void testGetAllProducts() {
        productService.addProduct("Laptop", 45000);
        productService.addProduct("Phone", 20000);
        assertEquals(2, productService.getAllProducts().size());
    }

    @Test
    void testDeleteProduct() {
        Product p = productService.addProduct("Laptop", 45000);
        boolean deleted = productService.deleteProduct(p.getId());
        assertTrue(deleted);
        assertEquals(0, productService.getAllProducts().size());
    }

    // CART TESTS
    @Test
    void testAddToCart() {
        Product p = productService.addProduct("Laptop", 45000);
        cartService.addToCart(p);
        assertEquals(1, cartService.getCart().size());
    }

    @Test
    void testCartTotal() {
        cartService.addToCart(new Product(1, "Laptop", 45000));
        cartService.addToCart(new Product(2, "Phone", 20000));
        assertEquals(65000, cartService.getTotal());
    }

    @Test
    void testClearCart() {
        cartService.addToCart(new Product(1, "Laptop", 45000));
        cartService.clearCart();
        assertEquals(0, cartService.getCart().size());
    }
}