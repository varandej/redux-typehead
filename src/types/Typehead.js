// @flow

export type Props = {
    url: string,
    inputValue: string,
    data: Array<Item>,
    changeSelectDisplay: (data: Array<Item>) => mixed,
    getData: (url: string, name: string) => mixed,
}

export type Item = {
    name: string,
    ...any
}