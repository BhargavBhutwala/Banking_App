import java.util.LinkedList;
import java.util.List;

public class SimpleLinkedList {

    public static void main(String[] args) {

        List<String> names = new LinkedList<>();

        names.add("Adam");
        names.add("Steve");
        names.add("Bob");
        names.add("John");
        names.add("Michael");

        for (String name: names)
            System.out.print(name + "->");

        names.removeFirst();
        System.out.println();
        System.out.println("Deleting first node...");
        System.out.println();

        for (String name: names)
            System.out.print(name + "->");

        names.addFirst("Paul");
        System.out.println();
        System.out.println("Adding new first node...");
        System.out.println();
        for (String name: names)
            System.out.print(name + "->");
    }
}
