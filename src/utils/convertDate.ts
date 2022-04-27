const f1  = (e: '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' ) => {
    const month = {
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December',
    }
    return month[e]
}

export const dateMonth = (e: any) => {
    const date = e.split('T', 1).toString()
    const dateArr = date.split('-')
    dateArr[1] = f1(dateArr[1])
    return dateArr.join(' ')
}