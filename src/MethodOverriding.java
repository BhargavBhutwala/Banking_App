class Player{

    String name;

    public void play(){
        System.out.println("Play Sport");
    }
}
class Cricketer extends Player{

    String role;

    public void play(){
        System.out.println("Batsman");
    }
}
public class MethodOverriding {

    public static void main(String[] args) {

        Cricketer c1 = new Cricketer();
        c1.play();
    }
}
