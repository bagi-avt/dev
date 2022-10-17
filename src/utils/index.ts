export const getObjectValueByKey = (key: string, obj: Object) => {
    let prop: keyof Object
    for (prop in obj) {
        if (prop === key) {
            return  String(obj[prop])
        }
    }
    return ''
}