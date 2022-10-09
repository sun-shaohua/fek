function throttle(fun, wait) {
    let previous = 0
    return () => {
        const now = Date.now();
        if (now - previous > wait) {
            previous = now;
            fun()
        }
    }
}
