public class LoopControl {

    public static void main(String[] args) {

        for (int i = 1; i <= 5; i++){

            if(i==2)
                continue;
            else if (i == 5) {
                break;
            }
            System.out.print(i + " ");
        }
    }
}
