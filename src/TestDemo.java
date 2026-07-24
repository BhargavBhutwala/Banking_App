class Calculator{

    public int sum(int a, int b){
        return a+b;
    }
    public int sub(int a, int b){
        return a-b;
    }
    public int div(int a, int b){
        return a/b;
    }
    public int mul(int a, int b){
        return a*b;
    }
}
public class TestDemo {

    public static void main(String[] args) {

        Calculator calc = new Calculator();

        System.out.println("Sum of 3+2: "+calc.sum(3,2));
        System.out.println("Division of 3/2: "+calc.div(3,2));
    }
}
