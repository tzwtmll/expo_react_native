
export const goBack = (navigation: any,routeName:string) => {
    const state = navigation.getState()
    const procureRouteKey = state.routes.find(item => item.name === routeName)?.key
    navigation.navigate({ key: procureRouteKey })
}