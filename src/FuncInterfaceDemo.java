interface Func{

    // single abstract method
    abstract void display();

    default void message1() {
        System.out.println("Default Method 1");
    }

    default void message2() {
        System.out.println("Default Method 2");
    }
}
public class FuncInterfaceDemo {
    public static void main(String[] args) {

        Func f1 = () -> System.out.println("Implementation of Abstract method");

        f1.display();
        f1.message1();
        f1.message2();
    }
}
