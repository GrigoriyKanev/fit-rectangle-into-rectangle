
# fit-rectangle-into-rectangle

Clean, tiny utility to fit one rectangle into another while preserving aspect ratio.

[GitHub](https://github.com/GrigoriyKanev/fit-rectangle-into-rectangle) • [npm](https://www.npmjs.com/package/fit-rectangle-into-rectangle)

## Table of Contents
- Description (English)
- Examples (English)
- Описание (Русский)
- API
- Installation
- Local build
- License

---

## Description (English)

A minimal TypeScript function that calculates how to scale and position an inner rectangle so it fits entirely inside an outer rectangle, keeping the original aspect ratio. Returns the scaled width/height and top-left coordinates for centering by default.

### Links

- GitHub: https://github.com/GrigoriyKanev/fit-rectangle-into-rectangle
- npm: https://www.npmjs.com/package/fit-rectangle-into-rectangle

### Examples (English)

```ts
import fitRectangle, { ElemSize } from 'fit-rectangle-into-rectangle';

const outer: ElemSize = { w: 1920, h: 1080 };
const inner: ElemSize = { w: 800, h: 600 };
const { x, y, width, height } = fitRectangle(outer, inner);
console.log(x, y, width, height);
```

---

## Описание (Русский)

Небольшая библиотека для точного вписывания одного прямоугольника в другой с сохранением пропорций. Функция вычисляет максимальный масштаб, при котором внутренний прямоугольник полностью помещается в внешний контейнер, и возвращает координаты и размеры для корректного размещения (по центру по умолчанию).

Описание
-
Функция вычисляет максимальный масштаб, при котором внутренний прямоугольник полностью помещается в внешний контейнер. Возвращает размеры и позицию для корректного размещения (центрирование по умолчанию).

API (TypeScript)
-
`type ElemSize = { w: number; h: number }`

`export default function fit_rectangle(outer: ElemSize, inner: ElemSize): { x: number; y: number; width: number; height: number }`

Параметры
-
- `outer` — размеры внешнего прямоугольника `{ w, h }`
- `inner` — исходные размеры вписываемого прямоугольника `{ w, h }`

Возвращает
-
- `x, y` — координаты верхнего левого угла вписанного прямоугольника внутри `outer`
- `width, height` — итоговые размеры после масштабирования

Установка
-
```bash
npm install fit-rectangle-into-rectangle
```

Пример (TypeScript)
-
```ts
import fitRectangle, { ElemSize } from 'fit-rectangle-into-rectangle';

const outer: ElemSize = { w: 1920, h: 1080 };
const inner: ElemSize = { w: 800, h: 600 };
const { x, y, width, height } = fitRectangle(outer, inner);
console.log(x, y, width, height);
```

Локальная сборка
-
```bash
npm install
npm run build
```

Лицензия
-
MIT

