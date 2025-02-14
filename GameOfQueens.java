public class GameOfQueens {

        public static void main(String[] args) {
            int n = 4;
            int[][] chess = new int[n][n];
            queen(0, chess, "");
        }

        public static void queen(int row, int[][] chess, String ans) {
            if (row == chess.length) {
                System.out.println(ans);
                return;
            }

            for (int col = 0; col < chess.length; col++) {
                if (isSafe(chess, row, col, chess.length)) {
                    chess[row][col] = 1; // Place the queen
                    queen(row + 1, chess, ans + row + "-" + col + ", "); // Explore next row
                    chess[row][col] = 0; // Backtrack: Remove the queen
                }
            }
        }

        public static boolean isSafe(int[][] chess, int row, int col, int n) {
            // Check the column
            for (int i = row - 1; i >= 0; i--) {
                if (chess[i][col] == 1) {
                    return false;
                }
            }

            // Check top-left diagonal
            for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
                if (chess[i][j] == 1) {
                    return false;
                }
            }

            // Check top-right diagonal
            for (int i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
                if (chess[i][j] == 1) {
                    return false;
                }
            }

            return true;
        }
    }

