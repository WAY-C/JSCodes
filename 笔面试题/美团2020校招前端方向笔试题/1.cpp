#include <iostream>
#include <vector>
#include <math.h>
using namespace std;
int n;
int max_eng = 0;
int se[6][3] = {{0, 0, 1}, {0, 0, -1}, {0, 1, 0}, {0, -1, 0}, {1, 0, 0}, {-1, 0, 0}};
void dfs(vector<vector<vector<int>>> &vec, int i, int j, int z, int e)
{
    e = e + vec[i][j][z];
    for (int k = 0; k < 6; k++)
    {
        int a = i + se[k][0], b = j + se[k][1], c = z + se[k][2];
        if (a < 0 || b < 0 || c < 0 || a == n || b == n || c == n || vec[a][b][c] == -1 || vec[i][j][z] <= vec[a][b][c])
            continue;
        int temp = vec[i][j][z];
        vec[i][j][z] = -1; //设置访问记号，并且保留当前值
        dfs(vec, a, b, c, e);
        vec[i][j][z] = temp;
    }
    max_eng = max(max_eng, e); //跳出循环说明6个方向都没法了，即到达终点
    //仅需在某条路的终点与最大值比较即可
}
int main()
{
    cin >> n;
    if (n == 0)
    {
        cout << 0;
        return 0;
    } //注意判断n为0的情况
    vector<vector<vector<int>>> vec(n, vector<vector<int>>(n, vector<int>(n, 0)));
    int i, j, z, e;
    int num = pow(n, 3);
    int m_i, m_j, m_z, m_e = 0;
    while (num--)
    {
        cin >> i >> j >> z >> e;
        vec[i][j][z] = e;
        if (e > m_e)
        {
            m_i = i, m_j = j, m_z = z, m_e = e;
        }
    }
    dfs(vec, m_i, m_j, m_z, 0);
    cout << max_eng;
    system("pause");
    return 0;
}