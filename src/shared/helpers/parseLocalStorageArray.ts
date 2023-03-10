export function parseLocalStorageArray(arrStr: string, castTo?: 'string' | 'number' = 'string') {
  let uncastedArray: any[] = arrStr.split(',');

  if (castTo === 'number') uncastedArray = uncastedArray.map((x) => +x);

  if (castTo === 'number') return uncastedArray as number[];
  if (castTo === 'string') return uncastedArray as string[];
  return uncastedArray;
}
