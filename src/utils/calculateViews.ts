export function calculate(arr: any) {
    if (arr === undefined || arr.length === 0) return 0
    const count = 0
    const sum = arr.reduce(
        (acc: number, item: any) => acc + item.rating, count
    )
    return sum
}