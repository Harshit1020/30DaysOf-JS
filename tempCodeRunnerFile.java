import java.util.Scanner;

public class Orchard {
    public static void main(String[] args) {
        findWinner();
    }

    static int countSets(String row) {
        int countM = 0;
        int countL = 0;
        int totalSets = 0;

        for (char c : row.toCharArray()) {
            if (c == 'M') {
                countM++;
            } else if (c == 'L') {
                countL++;
                totalSets += countM * countL;
            } else {
                return -1;
            }
        }

        return totalSets;
    }

    static void findWinner() {
        Scanner sc = new Scanner(System.in);
        String row1 = sc.nextLine().trim();
        String row2 = sc.nextLine().trim();

        if (row1.chars().anyMatch(c -> c != 'M' && c != 'L') || row2.chars().anyMatch(c -> c != 'M' && c != 'L')) {
            System.out.print("Invalid input");
            return;
        }

        int countRow1 = countSets(row1);
        int countRow2 = countSets(row2);

        if (countRow1 == -1 || countRow2 == -1) {
            System.out.print("Invalid input");
        } else if (countRow1 > countRow2) {
            System.out.print((row1.chars().anyMatch(c -> c == 'M' || c == 'L')) ? "Ashok" : "Draw");
        } else if (countRow2 > countRow1) {
            System.out.print((row2.chars().anyMatch(c -> c == 'M' || c == 'L')) ? "Anand" : "Draw");
        } else {
            System.out.print("Draw");
        }
    }
}
