# Array

## `null` 로 초기화된 길이가 l인 1차원 배열

```tsx
function initArrNull(l: number) {
  return Array(l).fill(null);
}
```

### (index + 1)로 초기화된 길이가 l인 1차원 배열

```tsx
function initArrOrd(l: number) {
  return Array.from(Array(l), (_, i) => i + 1);
}
```

### `null` 로 초기화된 (r, c) 크기의 2차원 배열

```tsx
function init2dArrNull(r: number, c: number) {
  return Array.from(Array(r), () => initArrNull(c));
}
```

### 순서대로 초기화된 (r, c) 크기의 2차원 배열 ⇒ 2차원 배열은 좌표 또는 경로

```tsx
function init2dArrOrd(r: number, c: number) {
  const arr = init2dArrNull(r, c);

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      arr[i][j] = c * j + i + 1;
    }
  }

  return arr;
}
```
