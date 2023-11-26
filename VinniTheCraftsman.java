import java.util.Arrays;
import java.util.Scanner;

public class VinniTheCraftsman {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input reading
        int N = scanner.nextInt();
        int M = scanner.nextInt();

        int[] quantityAvailable = new int[M];
        int[] quantityNeeded = new int[M];
        int[] costOfOneUnit = new int[M];
        int[] sellingPrice = new int[M];

        for (int i = 0; i < M; i++) {
            quantityAvailable[i] = scanner.nextInt();
        }

        for (int i = 0; i < M; i++) {
            quantityNeeded[i] = scanner.nextInt();
        }

        for (int i = 0; i < M; i++) {
            costOfOneUnit[i] = scanner.nextInt();
        }

        for (int i = 0; i < M; i++) {
            sellingPrice[i] = scanner.nextInt();
        }

        // Output result
        int result = maximizeEarnings(N, M, quantityAvailable, quantityNeeded, costOfOneUnit, sellingPrice);
        System.out.println(result);
    }

    public static int maximizeEarnings(int N, int M, int[] quantityAvailable, int[] quantityNeeded, int[] costOfOneUnit, int[] sellingPrice) {
        // Create a list of tuples (profit, material_type) for each material type
        int[][] materialInfo = new int[M][2];

        for (int i = 0; i < M; i++) {
            materialInfo[i][0] = sellingPrice[i] - costOfOneUnit[i];
            materialInfo[i][1] = i;
        }

        // Sort the materials by profit in descending order
        Arrays.sort(materialInfo, (a, b) -> Integer.compare(b[0], a[0]));

        int totalEarnings = 0;

        for (int i = 0; i < M; i++) {
            int materialIndex = materialInfo[i][1];

            // Calculate the maximum number of toys that can be made with the available money
            int maxToys = Math.min(N / costOfOneUnit[materialIndex], quantityAvailable[materialIndex] / quantityNeeded[materialIndex]);

            // Update earnings and available money
            totalEarnings += maxToys * sellingPrice[materialIndex];
            N -= maxToys * costOfOneUnit[materialIndex];
        }

        return totalEarnings;
    }
}
