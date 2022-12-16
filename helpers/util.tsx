export const delay = (ms:number) => new Promise(res => setTimeout(res, ms));

export const isMobile = () => {
    let vw:number = 0;
    if(window) vw=window.innerWidth;
    return vw < 975;
}