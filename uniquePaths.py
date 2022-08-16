# find the unique paths from an origin point to an end point
from math import factorial

class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        return factorial(m+n-2) // factorial(n-1) // factorial(m-1)
        
        # mn = factorial(8) --> 3+7-2 --> 40320
        # m  = factorial(6) --> 7-1   --> 720
        # n  = factorial(2) --> 3-1   --> 2
        # mn / m / n        -->       --> 28
      