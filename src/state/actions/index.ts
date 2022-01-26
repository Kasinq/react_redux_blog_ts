interface SetNewsAction {
    type: 'setNews'
    payload: any
}
interface AddNewsAction {
    type: 'addNews'
    payload: any
}
interface SelectedNews {
    type: 'selectedNews'
    payload: any
}
interface SetComments {
    type: 'setComments'
    payload: any
}

export type Action = SetNewsAction | AddNewsAction | SelectedNews | SetComments