export const breakpointMap = {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1920px',
};

export function oneOf(value, list) {
    for (let i = 0, l = list.length; i < l; i++) {
        if (value === list[i]) {
            return true;
        }
    }
    return false;
}