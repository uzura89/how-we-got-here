export async function delayedForEach(
  array: any[],
  callback: (item: any, iteration: number) => void,
  delay: number
) {
  for (let i = 0; i < array.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    callback(array[i], i);
  }
}
