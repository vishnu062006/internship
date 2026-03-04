import java.util.ArrayList;
import java.util.List;

public class CartService {

    private List<Product> cart = new ArrayList<>();

    // ADD TO CART
    public void addToCart(Product product) {
        cart.add(product);
    }

    // VIEW CART
    public List<Product> getCart() {
        return cart;
    }

    // REMOVE FROM CART
    public boolean removeFromCart(int id) {
        return cart.removeIf(p -> p.getId() == id);
    }

    // TOTAL PRICE
    public double getTotal() {
        return cart.stream()
                .mapToDouble(Product::getPrice)
                .sum();
    }

    // CLEAR CART
    public void clearCart() {
        cart.clear();
    }
}