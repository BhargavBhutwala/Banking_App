import java.util.Scanner;

public class WhileLoop {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        String username = "", pwd = "";

        while ( !(username.equals("Prasunamba") && pwd.equals("4321"))){

            System.out.println("Enter Username:");
            username = sc.nextLine();

            System.out.println("Enter Password:");
            pwd = sc.nextLine();
        }
        System.out.println("username: " + username + " password: " + pwd);
    }
}
