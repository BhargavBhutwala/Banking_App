public class RunnableThread {

    public static void main(String[] args) {

        for(int i = 0; i <20; i++){

            final int num = i;

            Thread t1 = new Thread(() -> {
                System.out.println("Running Thread: " + num);
                Thread.dumpStack();
            });
            System.out.println(t1.isAlive());
            t1.setName("Thread-"+num);
            t1.start();
            System.out.println(t1.isAlive());
        }
    }
}
