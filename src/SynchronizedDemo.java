class Counter{

    int count = 0;

    public void increment(){
        count++;
    }
}

class MyThread extends Thread{

    Counter counter;

    MyThread(Counter counter, String name){
        super(name);
        this.counter = counter;
    }

    public void run(){

        for (int i = 1; i <= 5; i++){
            counter.increment();
        }
    }
}

public class SynchronizedDemo {

    public static void main(String[] args) {

        
    }
}
