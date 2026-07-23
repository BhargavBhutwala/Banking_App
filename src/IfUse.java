public class IfUse {
    public static void main(String[] args) {

        int a = 1;
        int b = 2;

        if (a + b < 20){
            System.out.println("If use case");
            if (a + b < 10){
                System.out.println("Nested If use case");
            }
        } else if (a + b > 50) {
            System.out.println("Else If use case");
        }
        else {
            System.out.println("Else use case");
        }
    }
}
