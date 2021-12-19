/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
export default function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
  // Write your code here
  let apple = 0;
  let orange = 0;
  apples.forEach((element) => {
    if (a + element >= s && a + element <= t) {
      apple++;
    }
  });

  oranges.forEach((element) => {
    const sa = b + element;
    if (sa >= s && sa <= t) {
      orange++;
    }
  });
  console.log(apple);
  console.log(orange);
}
