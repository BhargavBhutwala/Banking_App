import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Stack;

public class SimpleStack {

    public static void main(String[] args) {

        Deque<Integer> stack = new ArrayDeque<>();

        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.push(40);
        stack.push(50);

        for (int ele: stack)
            System.out.print(ele + "->");
        System.out.print("null");

        System.out.println();
        System.out.println("Removing an element from stack");
        stack.pop();

        for (int ele: stack)
            System.out.print(ele + "->");
        System.out.print("null");

        System.out.println();
        System.out.println("Peek on stack: "+stack.peek());
    }
}
