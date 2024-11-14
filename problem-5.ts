const getProperty = <T, Q extends keyof T>(obj: T, prop: Q): T[Q] => {
    return obj[prop]
}