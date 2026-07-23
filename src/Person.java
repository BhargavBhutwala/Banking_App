public class Person {

    private String fname;

    private String lname;

    private String address;

    private String email;

    public Person() {
    }

    public Person(String fname, String lname, String address, String email) {
        this.fname = fname;
        this.lname = lname;
        this.address = address;
        this.email = email;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
