export function pageCounts(totalCount: number, limit: number) {
    let pages = (totalCount) / limit
    let res = []
    for (let i = 1; i <= Math.ceil(pages); i++) {
        res.push(i)
    }
    return res
}