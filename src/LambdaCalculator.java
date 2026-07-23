@FunctionalInterface
interface Math{
    int compute(int a, int b);
}

public class LambdaCalculator {
    public static void main(String[] args) {

        Math multiply = (a, b) -> a*b;
        Math add = (a, b) -> a+b;
        Math sub = (a, b) -> a-b;
        Math div = (a, b) -> a/b;

        System.out.println("Product of 2*3: "+multiply.compute(2,3));
        System.out.println("Sum of 2+3: "+add.compute(2,3));
        System.out.println("Difference of 3-2: "+sub.compute(3,2));
        System.out.println("Division of 3/2: "+div.compute(3,2));
    }
}
