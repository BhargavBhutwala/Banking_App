import java.util.Scanner;

public class SwitchDemo {

    public static void main(String[] args) {

        String fruit = "";

        Scanner sc = new Scanner(System.in);

        while(!fruit.equals("Apple")){

            System.out.print("Enter Fruit Name: ");
            fruit = sc.nextLine();

            switch (fruit){

                case "Mango":
                    System.out.println("You entered Mango");
                    continue;

                case "Banana":
                    System.out.println("You entered Banana");
                    continue;

                case "Apple":
                    System.out.println("You entered Apple");
                    break;

                default:
                    System.out.println("You entered Other Fruit");
            }
        }
    }
}
