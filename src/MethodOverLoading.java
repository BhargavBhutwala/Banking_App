public class MethodOverLoading {

    public int sum(int a, int b){
        return a + b;
    }

    public int sum(int a, int b, int c){
        return a + b + c;
    }

    public float sum(float a, float b){
        return a + b;
    }

    public static void main(String[] args) {

        MethodOverLoading o1 = new MethodOverLoading();
        System.out.println("Sum of 2 integers: " + o1.sum(2, 3));

        MethodOverLoading o2 = new MethodOverLoading();
        System.out.println("Sum of 3 integers: " + o2.sum(2, 3, 5));

        MethodOverLoading o3 = new MethodOverLoading();
        System.out.println("Sum of 2 floats: " + o1.sum(2.3f, 4.2f));
    }
}
