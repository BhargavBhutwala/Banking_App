public class CustomLinkedList {

    private Node head;

    public void add(String data){

        Node new_node = new Node(data, null);

        if(head == null)
            head = new_node;
        else{
            Node temp = head;
            while(temp.next != null)
                temp = temp.next;
            temp.next = new_node;
        }
    }

    public void display(){

        Node temp = head;

        System.out.println();
        while (temp != null){
            System.out.print(temp.data + "->");
            temp = temp.next;
        }
        System.out.print("null");
    }

    public static void main(String[] args) {

        CustomLinkedList l1 = new CustomLinkedList();
        l1.add("Ram");
        l1.add("Narayan");
        l1.add("krsna");
        l1.display();
    }
}
class Node{

    String data;

    Node next;

    public Node(){}

    public Node(String data, Node next) {
        this.data = data;
        this.next = next;
    }
}
