const isBadVersion = (num) => {
  if(num > 3) {return true}
  return false
}

const checkVersion = (isBadVersion, n) => [...Array(n+1).keys()].filter(ver => (!isBadVersion(ver))).pop() + 1;

const badVersion = checkVersion(isBadVersion, 7)
console.log(badVersion)