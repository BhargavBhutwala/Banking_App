import java.util.LinkedList;
import java.util.Queue;

public class SimpleQueue {

    public static void main(String[] args) {

        Queue<Integer> queue = new LinkedList<>();

        queue.offer(10);
        queue.offer(20);
        queue.offer(30);
        queue.offer(40);
        queue.offer(50);

        for(int ele:queue)
            System.out.print(ele + " ");

        System.out.println();
        System.out.println("Removing an element from queue");

        queue.poll();
        for(int ele:queue)
            System.out.print(ele + " ");

    }
}
