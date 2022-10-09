function debounce(fun, delay) {
    let timer = null
    return () => {
        if (timer)  clearTimeout(timer);
        timer = setTimeout(fun, delay);
    }
}
