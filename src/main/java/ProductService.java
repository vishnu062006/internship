import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class ProductService {

    private List<Product> products = new ArrayList<>();
    private int nextId = 1;

    // CREATE
    public Product addProduct(String name, double price) {
        Product product = new Product(nextId++, name, price);
        products.add(product);
        return product;
    }

    // READ ALL
    public List<Product> getAllProducts() {
        return products;
    }

    // READ ONE
    public Optional<Product> getProductById(int id) {
        return products.stream()
                .filter(p -> p.getId() == id)
                .findFirst();
    }

    // UPDATE
    public boolean updateProduct(int id, String newName, double newPrice) {
        Optional<Product> found = getProductById(id);
        if (found.isPresent()) {
            products.remove(found.get());
            products.add(new Product(id, newName, newPrice));
            return true;
        }
        return false;
    }

    // DELETE
    public boolean deleteProduct(int id) {
        return products.removeIf(p -> p.getId() == id);
    }
}