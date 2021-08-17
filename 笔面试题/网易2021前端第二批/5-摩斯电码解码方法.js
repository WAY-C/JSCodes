// 已知摩尔斯电码和字符映射关系如下：
// A -> 0
// B -> 1
// C -> 10
// D -> 11
// E -> 100
// F -> 101
// G -> 110
// H -> 111
// 当前我们获取到了一串01数字字符串，需要进行摩尔斯电码解码，请问共有多少种解码方法？
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        char[] str = br.readLine().toCharArray();
        int n = str.length;
        int[] dp = new int[n + 1];
        dp[n] = 1; // 最后一个字符肯定只能是一种翻译
        // 从后往前遍历字符
        for (int i = n - 1; i >= 0; i--) {
            dp[i] = dp[i + 1]; // 单字符码的情况
            if (str[i] == '1') { // 对于"1"，还有双字符码和三字符码的情况
                if (i + 2 <= n) dp[i] += dp[i + 2];
                if (i + 3 <= n) dp[i] += dp[i + 3];
            }
        }
        System.out.println(dp[0]);
    }
}

/*
已知摩尔斯电码和字符映射关系如下：
A -> 0
B -> 1
C -> 10
D -> 11
E -> 100
F -> 101
G -> 110
H -> 111
当前我们获取到了一串01数字字符串，需要进行摩尔斯电码解码，请问共有多少种解码方法？

100
如果dp[0] = 0; // 这里存在最优子结构
if(i>=2) 而且还是10 11 那么dp[i] = dp[i-2]+dp[i];
if(i>=3) 而且在100 101 110 111 之间 dp[i]+=dp[i-3]
 */
#
include < algorithm > #include < iostream > #include < set > #include < string > #include < vector >
    using namespace std;

set < string > se = { "0", "1", "10", "11", "100", "101", "110", "111" };

int solution(string & s) {
    vector < int > dp(s.size() + 1, 0);
    dp[1] = 1;
    dp[0] = 1;
    for (int i = 2; i <= s.size(); i++) {
        dp[i] += dp[i - 1];
        if (i < 2) {
            dp[i] = dp[i - 1];
        } else if (i >= 2 && i < 3) {
            auto tmp = s.substr(i - 2, 2);
            //   cout << "sub: " << tmp << endl;
            if (se.count(tmp)) {
                dp[i] += dp[i - 2];
            }
        } else if (i >= 3) {
            auto s_2 = s.substr(i - 2, 2);
            auto s_3 = s.substr(i - 3, 3);
            if (se.count(s_2)) {
                dp[i] += dp[i - 2];
            }
            if (se.count(s_3)) {
                dp[i] += dp[i - 3];
            }
        }
    }
    return dp[s.size()];
}

int main() {
    string s;
    while (cin >> s) {
        /* code */
        cout << solution(s) << endl;
    }
}