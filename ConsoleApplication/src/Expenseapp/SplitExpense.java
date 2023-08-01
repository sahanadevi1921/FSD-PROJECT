package Expenseapp;




public class SplitExpense extends BaseExpense {
    private int expenseId;

    // Constructor
    public SplitExpense(int splitExpenseId, int expenseId, double totalAmount, double splitAmount) {
        super(splitExpenseId, totalAmount, splitAmount);
        this.expenseId = expenseId;
    }

    // Getters and Setters
    public int getExpenseId() {
        return expenseId;
    }

    public void setExpenseId(int expenseId) {
        this.expenseId = expenseId;
    }

    @Override
    public String toString() {
        return "SplitExpense{" +
                "splitExpenseId=" + expenseId +
                ", totalAmount=" + totalAmount +
                ", splitAmount=" + splitAmount +
                '}';
    }
}


//public class SplitExpense {
//    private int splitExpenseId;
//    private int expenseId;
//    private double totalAmount;
//    private double splitAmount;
//
//    public SplitExpense() {
//        // Default constructor (required for some frameworks)
//    }
//
//    public SplitExpense(int splitExpenseId, int expenseId, double totalAmount, double splitAmount) {
//        this.splitExpenseId = splitExpenseId;
//        this.expenseId = expenseId;
//        this.totalAmount = totalAmount;
//        this.splitAmount = splitAmount;
//    }
//
//    // Getters and Setters
//
//    public int getSplitExpenseId() {
//        return splitExpenseId;
//    }
//
//    public void setSplitExpenseId(int splitExpenseId) {
//        this.splitExpenseId = splitExpenseId;
//    }
//
//    public int getExpenseId() {
//        return expenseId;
//    }
//
//    public void setExpenseId(int expenseId) {
//        this.expenseId = expenseId;
//    }
//
//    public double getTotalAmount() {
//        return totalAmount;
//    }
//
//    public void setTotalAmount(double totalAmount) {
//        this.totalAmount = totalAmount;
//    }
//
//    public double getSplitAmount() {
//        return splitAmount;
//    }
//
//    public void setSplitAmount(double splitAmount) {
//        this.splitAmount = splitAmount;
//    }
//
//    @Override
//    public String toString() {
//        return "SplitExpense{" +
//                "splitExpenseId=" + splitExpenseId +
//                ", expenseId=" + expenseId +
//                ", totalAmount=" + totalAmount +
//                ", splitAmount=" + splitAmount +
//                '}';
//    }
//}