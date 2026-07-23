public class Employee {

    public int print(){
        int emp_id = 101;
        System.out.println("EMP Id: " + emp_id);
        return emp_id;
    }
}
class Manager extends Employee{

    public int print(){
        int manager_id = 102;
        System.out.println("Manager Id: " + manager_id);
        return manager_id;
    }
}
class  Customer{

    public int print(){
        int customer_id = 103;
        System.out.println("Customer Id: " + customer_id);
        return customer_id;
    }
}
class demo{
    public static void main(String[] args) {

        Employee e1 = new Employee();
        System.out.println(e1.print());

        Manager m1 = new Manager();
        System.out.println(m1.print());

        Customer c1 = new Customer();
        System.out.println(c1.print());

        Employee e2 = new Manager();
        System.out.println(e2.print());
        
    }
}
