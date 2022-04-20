export function isSigned(arr: any, user: number) {
    if (!arr) return false
    if (Array.isArray(arr)) return arr.indexOf(user) != -1
    return arr == user
}