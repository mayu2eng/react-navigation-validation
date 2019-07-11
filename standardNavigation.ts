//copy rights Mayuran Kunarajah
export default interface StandardNavigation<T>{
    navigate: (screen: string, params?: T) => void,
    setParams?: (params: T) => void,
    goBack?: () => void,
    readonly getParam?: <U extends keyof T>(key: U, defaultVal?: any) => any,
    readonly state?: {
        routeName?: string,
        key?: string,
        params?: T
    }
}
