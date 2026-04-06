export type ElemSize = {
    w: number;
    h: number;
    r: number;
}

const fit_rectangle = (aRect: HTMLBaseElement, bRect: HTMLBaseElement) => {
    // вписать прямоугольник а в прямоугольник b
    const a = {
        w: aRect.offsetWidth,
        h: aRect.offsetHeight,
    } as ElemSize;
    a.r = a.w / a.h;

    let b = {
        w: bRect.offsetWidth,
        h: bRect.offsetHeight,
    } as ElemSize;
    b.r = b.w / b.h;

    let scale = 0

    let log = '';

    if (a.w >= b.w) { 			// Картинка шире
        if (a.h >= b.h) {		// Картинка выше
            if (a.r > b.r) { 	// Картинка шире, выше и в альбомном формате
                scale = b.w / a.w;
                log = 'Картинка шире, выше и в альбомном формате';
            } else {			// Картинка шире, выше и в портретном формате
                scale = b.h / a.h;
                log = 'Картинка шире, выше и в портретном формате';
            }
        } else {				// Картинка шире, ниже и в альбомном формате
            scale = b.w / a.w;
            log = 'Картинка шире, ниже и в альбомном формате';
        }

    } else {					// Картинка уже
        if (a.h >= b.h) {		// Картинка уже, Выше и в портретном формате
            scale = b.h / a.h;
            log = 'Картинка уже, Выше и в портретном формате';
        } else {				// Картинка ниже
            if (a.r >= b.r) { 	// Картинка уже, Ниже и в альбомном формате
                scale = b.w / a.w;
                log = 'Картинка уже, Ниже и в альбомном формате';
            } else {			// Картинка в портретном формате
                scale = b.h / a.h;
                log = 'Картинка уже, Ниже и в портретном формате';
            }
        }
    }
    // console.log(log);
    return +scale.toFixed(2);
}

export default fit_rectangle;