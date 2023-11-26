import java.util.Arrays;
import java.util.Scanner;

public class PerfectBugdget {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        Project[] projects = new Project[n];

        for (int i = 0; i < n; i++) {
            int expenditure = sc.nextInt();
            int bonus = sc.nextInt();
            int rewardOrPenalty = sc.nextInt();
            projects[i] = new Project(expenditure, bonus, rewardOrPenalty);
        }

        Arrays.sort(projects);

        int minBudget = 0;
        int currentBudget = 0;

        for (Project project : projects) {
            currentBudget += project.expenditure;
            if (currentBudget < 0) {
                minBudget -= currentBudget;
                currentBudget = 0;
            }
        }

        System.out.println(minBudget);
    }

    static class Project implements Comparable<Project> {
        int expenditure;
        int bonus;
        int rewardOrPenalty;

        public Project(int expenditure, int bonus, int rewardOrPenalty) {
            this.expenditure = expenditure;
            this.bonus = bonus;
            this.rewardOrPenalty = rewardOrPenalty;
        }

        @Override
        public int compareTo(Project other) {
            // Sort projects based on (bonus - penalty) in descending order
            return Integer.compare(other.bonus - other.rewardOrPenalty, this.bonus - this.rewardOrPenalty);
        }
    }
}
