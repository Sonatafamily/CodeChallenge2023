/**
 * Deep clone an object
 * @param obj - object to clone
 * @returns {T}
 * @example
 * deepClone({ a: 1, b: 2 }) // { a: 1, b: 2 }
 * deepClone({ a: 1, b: { c: 3 } }) // { a: 1, b: { c: 3 } }
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    const arrCopy = (obj as unknown as Array<unknown>).map((item) =>
      deepClone(item)
    );
    return arrCopy as unknown as T;
  }

  const clonedObj = {} as Record<string, unknown>;
  for (const key in obj) {
    clonedObj[key] = deepClone((obj as Record<string, unknown>)[key]);
  }
  return clonedObj as T;
}
