import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.function.Supplier;

@FunctionalInterface
interface Operation{

    int operate(int a,int b);
}
interface utils{

    void display();
}
public class LambdaDemo {

    public static void main(String[] args) {

        List<String> names = new ArrayList<>();

        names.add("Ram");
        names.add("Krsna");
        names.add("Narayan");
        names.add("Vishnu");

        names.forEach(name -> System.out.print(name + " "));

        System.out.println();
        Runnable r1 = () -> System.out.println("Running thread: ");

        r1.run();

        Operation add = (a, b) -> a + b;

        Operation multiply = (int a, int b) -> a * b;

        System.out.println("Sum: " + add.operate(2,3));
        System.out.println("Multiply: " + multiply.operate(2,3));

        Function<Integer, Float> amount = Float::valueOf;
        System.out.println("Amount: " + amount.apply(2));

        Predicate<String> predicate = reply -> reply.equals("Yes");
        System.out.println("Predicate: " + (predicate.test("Yes")?"Welcome":"Not Welcome"));

        Supplier<String> supplier = () -> "Hello";
        System.out.println("Supplier: " + (supplier.get()));

        String name = null;
        System.out.println("Length: " + Optional.ofNullable(name).orElse(""));

        utils print = () -> System.out.println("Hello");
        print.display();
    }
}
