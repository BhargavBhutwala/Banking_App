public class StaticMember {

    int var = 0;
    static int statVar = 0;

    void increment(){
        var++;
        statVar++;

        System.out.println("Normal Var count: " + var);
        System.out.println("Static Var count: " + statVar);
    }

    public static void main(String[] args) {

        StaticMember m1 = new StaticMember();

        m1.increment();
        m1.increment();

        StaticMember m2 = new StaticMember();

        m2.increment();
        m2.increment();
    }
}
