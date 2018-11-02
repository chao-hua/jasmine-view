export function oneOf(value, list) {
    for (let i = 0, l = list.length; i < l; i++) {
        if (value === list[i]) {
            return true;
        }
    }
    return false;
}