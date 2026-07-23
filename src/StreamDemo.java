import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class StreamDemo {

    public static void main(String[] args) {

        List<Integer> nums = new ArrayList<>();
        nums.add(1);
        nums.add(2);
        nums.add(3);
        nums.add(4);
        nums.add(5);

        nums.stream().map(n -> n*2).forEach(System.out::println);

        nums.stream().filter(n -> n%2==0).forEach(System.out::println);

//        String user = "Bharggav";
//        Optional.ofNullable(user).map(User::getName).orElse("Guest"); [1];

    }
}
