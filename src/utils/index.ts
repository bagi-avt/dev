export const getObjectValueByKey = (key: string, obj: Object) => {
    let prop: keyof Object
    for (prop in obj) {
        if (prop === key) {
            return String(obj[prop])
        }
    }
    return ''
}

export const getPageCount = (totalCount: number, limit: number) => {
    return Math.ceil(totalCount / limit)
}
