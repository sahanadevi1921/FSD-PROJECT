package Expenseapp;


import java.util.List;
import java.util.Scanner;

public class ExpenseSharingApp {
    private static final Scanner scanner = new Scanner(System.in);
    private static final DataStore dataStore = new InMemoryDataStore();

    public static void main(String[] args) {
        showMenu();
    }

    private static void showMenu() {
        while (true) {
            System.out.println("Expense Sharing App");
            System.out.println("1. Add User");
            System.out.println("2. Add Expense");
            System.out.println("3. Split Expense");
            System.out.println("4. View Expenses");
            System.out.println("5. View Balances");
            System.out.println("0. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume the newline character

            switch (choice) {
                case 1:
                    addUser();
                    break;
                case 2:
                    addExpense();
                    break;
                case 3:
                    splitExpense();
                    break;
                case 4:
                    viewExpenses();
                    break;
                case 5:
                    viewBalances();
                    break;
                case 0:
                    System.out.println("Goodbye!");
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    private static void addUser() {
        System.out.println("Enter User ID: ");
        int userId = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character

        System.out.println("Enter User Name: ");
        String name = scanner.nextLine();

        System.out.println("Enter User Email: ");
        String email = scanner.nextLine();

        System.out.println("Enter User Password: ");
        String password = scanner.nextLine();

        User newUser = new User(userId, name, email, password);
        dataStore.addUser(newUser);

        System.out.println("User added successfully!");
    }

    private static void addExpense() {
        System.out.println("Enter the user ID who incurred the expense: ");
        int userId = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character

        // Check if the user with the given ID exists
        List<User> users = dataStore.getUsers();
        User user = getUserById(users, userId);
        if (user == null) {
            System.out.println("User not found. Please enter valid user ID.");
            return;
        }

        System.out.println("Enter the description of the expense: ");
        String description = scanner.nextLine();

        System.out.println("Enter the amount of the expense: ");
        double amount = scanner.nextDouble();
        scanner.nextLine(); // Consume the newline character

        System.out.println("Enter the date of the expense (optional): ");
        String date = scanner.nextLine();

        System.out.println("Enter the count of members involved in the expense: ");
        int countOfMembers = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character

        int expenseId = dataStore.getExpenses().size() + 1;
        Expense expense = new Expense(expenseId, userId, description, amount, date, countOfMembers);
        dataStore.addExpense(expense);

        System.out.println("Expense added successfully!");
    }

    private static void splitExpense() {
        System.out.println("Enter the expense ID to split: ");
        int expenseId = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character

        // Check if the expense with the given ID exists
        List<Expense> expenses = dataStore.getExpenses();
        Expense expense = getExpenseById(expenses, expenseId);
        if (expense == null) {
            System.out.println("Expense not found. Please enter valid expense ID.");
            return;
        }

        System.out.println("Enter the total amount to split: ");
        double totalAmount = scanner.nextDouble();
        scanner.nextLine(); // Consume the newline character

        System.out.println("Enter the count of members involved in the split: ");
        int countOfMembers = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character

        double splitAmount = totalAmount / countOfMembers;
        int splitExpenseId = dataStore.getSplitExpenses().size() + 1;
        SplitExpense splitExpense = new SplitExpense(splitExpenseId, expenseId, totalAmount, splitAmount);
        dataStore.addSplitExpense(splitExpense);

        System.out.println("Expense split successfully!");
    }

    private static void viewExpenses() {
        List<Expense> expenses = dataStore.getExpenses();
        if (expenses.isEmpty()) {
            System.out.println("No expenses found.");
        } else {
            System.out.println("Expense ID | User ID | Description | Amount | Date | Count of Members");
            for (Expense expense : expenses) {
                System.out.println(expense.getExpenseId() + " | " + expense.getUserId() + " | " +
                        expense.getDescription() + " | " + expense.getAmount() + " | " +
                        expense.getDate() + " | " + expense.getCountOfMembers());
            }
        }
    }

    private static void viewBalances() {
        List<SplitExpense> splitExpenses = dataStore.getSplitExpenses();
        if (splitExpenses.isEmpty()) {
            System.out.println("No split expenses found.");
        } else {
            System.out.println("Split Expense ID | Total Amount | Split Amount");
            for (SplitExpense splitExpense : splitExpenses) {
                System.out.println(splitExpense.getExpenseId() + " | " + splitExpense.getTotalAmount() + " | " +
                        splitExpense.getSplitAmount());
            }
        }
    }

    // Helper methods to get User and Expense by ID
    private static User getUserById(List<User> users, int userId) {
        for (User user : users) {
            if (user.getUserId() == userId) {
                return user;
            }
        }
        return null;
    }

    private static Expense getExpenseById(List<Expense> expenses, int expenseId) {
        for (Expense expense : expenses) {
            if (expense.getExpenseId() == expenseId) {
                return expense;
            }
        }
        return null;
    }
}
























//import java.util.List;
//import java.util.Scanner;
//
//public class ExpenseSharingApp {
//    private static final Scanner scanner = new Scanner(System.in);
//    private static final DataStore dataStore = new InMemoryDataStore();
//
//    public static void main(String[] args) {
//        showMenu();
//    }
//
//    private static void showMenu() {
//        while (true) {
//            System.out.println("Expense Sharing App");
//            System.out.println("1. Add User");
//            System.out.println("2. Add Expense");
//            System.out.println("3. Split Expense");
//            System.out.println("4. View Expenses");
//            System.out.println("5. View Balances");
//            System.out.println("0. Exit");
//            System.out.print("Enter your choice: ");
//            int choice = scanner.nextInt();
//            scanner.nextLine(); // Consume the newline character
//
//            switch (choice) {
//                case 1:
//                    addUser();
//                    break;
//                case 2:
//                    addExpense();
//                    break;
//                case 3:
//                    splitExpense();
//                    break;
//                case 4:
//                    viewExpenses();
//                    break;
//                case 5:
//                    viewBalances();
//                    break;
//                case 0:
//                    System.out.println("Goodbye!");
//                    return;
//                default:
//                    System.out.println("Invalid choice. Please try again.");
//            }
//        }
//    }
//
//    private static void addUser() {
//        System.out.println("Enter User ID: ");
//        int userId = scanner.nextInt();
//        scanner.nextLine(); // Consume the newline character
//
//        System.out.println("Enter User Name: ");
//        String name = scanner.nextLine();
//
//        System.out.println("Enter User Email: ");
//        String email = scanner.nextLine();
//
//        System.out.println("Enter User Password: ");
//        String password = scanner.nextLine();
//
//        User newUser = new User(userId, name, email, password);
//        dataStore.addUser(newUser);
//
//        System.out.println("User added successfully!");
//    }
//
//    private static void addExpense() {
//        // Logic to add an expense
//        System.out.println("Enter the user ID who incurred the expense: ");
//        int userId = scanner.nextInt();
//        scanner.nextLine(); // Consume the newline character
//
//        // Check if the user with the given ID exists
//        List<User> users = dataStore.getUsers();
//        User user = getUserById(users, userId);
//        if (user == null) {
//            System.out.println("User not found. Please enter valid user ID.");
//            return;
//        }
//
//        System.out.println("Enter the description of the expense: ");
//        String description = scanner.nextLine();
//
//        System.out.println("Enter the amount of the expense: ");
//        double amount = scanner.nextDouble();
//        scanner.nextLine(); // Consume the newline character
//
//        System.out.println("Enter the date of the expense (optional): ");
//        String date = scanner.nextLine();
//
//        System.out.println("Enter the count of members involved in the expense: ");
//        int countOfMembers = scanner.nextInt();
//        scanner.nextLine(); // Consume the newline character
//
//        int expenseId = dataStore.getExpenses().size() + 1;
//        Expense expense = new Expense(expenseId, userId, description, amount, date, countOfMembers);
//        dataStore.addExpense(expense);
//
//        System.out.println("Expense added successfully!");
//    }
//
//    private static void splitExpense() {
//        // Logic to split an expense
//        System.out.println("Enter the expense ID to split: ");
//        int expenseId = scanner.nextInt();
//        scanner.nextLine(); // Consume the newline character
//
//        // Check if the expense with the given ID exists
//        List<Expense> expenses = dataStore.getExpenses();
//        Expense expense = getExpenseById(expenses, expenseId);
//        if (expense == null) {
//            System.out.println("Expense not found. Please enter valid expense ID.");
//            return;
//        }
//
//        System.out.println("Enter the total amount to split: ");
//        double totalAmount = scanner.nextDouble();
//        scanner.nextLine(); // Consume the newline character
//
//        System.out.println("Enter the count of members involved in the split: ");
//        int countOfMembers = scanner.nextInt();
//        scanner.nextLine(); // Consume the newline character
//
//        double splitAmount = totalAmount / countOfMembers;
//        int splitExpenseId = dataStore.getSplitExpenses().size() + 1;
//        SplitExpense splitExpense = new SplitExpense(splitExpenseId, expenseId, totalAmount, splitAmount);
//        dataStore.addSplitExpense(splitExpense);
//
//        System.out.println("Expense split successfully!");
//    }
//
//    private static void viewExpenses() {
//        // Logic to view expenses
//        List<Expense> expenses = dataStore.getExpenses();
//        if (expenses.isEmpty()) {
//            System.out.println("No expenses found.");
//        } else {
//            System.out.println("Expense ID | User ID | Description | Amount | Date | Count of Members");
//            for (Expense expense : expenses) {
//                System.out.println(expense.getExpenseId() + " | " + expense.getUserId() + " | " +
//                        expense.getDescription() + " | " + expense.getAmount() + " | " +
//                        expense.getDate() + " | " + expense.getCountOfMembers());
//            }
//        }
//    }
//
//    private static void viewBalances() {
//        // Logic to view balances
//        List<SplitExpense> splitExpenses = dataStore.getSplitExpenses();
//        if (splitExpenses.isEmpty()) {
//            System.out.println("No split expenses found.");
//        } else {
//            System.out.println("Split Expense ID | Total Amount | Split Amount");
//            for (SplitExpense splitExpense : splitExpenses) {
//                System.out.println(splitExpense.getSplitExpenseId() + " | " + splitExpense.getTotalAmount() + " | " +
//                        splitExpense.getSplitAmount());
//            }
//        }
//    }
//
//    // Helper methods to get User and Expense by ID
//    private static User getUserById(List<User> users, int userId) {
//        for (User user : users) {
//            if (user.getUserId() == userId) {
//                return user;
//            }
//        }
//        return null;
//    }
//
//    private static Expense getExpenseById(List<Expense> expenses, int expenseId) {
//        for (Expense expense : expenses) {
//            if (expense.getExpenseId() == expenseId) {
//                return expense;
//            }
//        }
//        return null;
//    }
//}
