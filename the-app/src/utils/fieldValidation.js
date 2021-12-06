export const required = value => {
    if (value) return undefined;

    return "Required field";
}

export const maxLengthCreator = (maxLength) => (value => {
    if (value && value.length > maxLength) return `Don't use more than ${maxLength} symbols`
    return undefined;
})

export const minLengthCreator = (minLength) => (value => {
    if (value && value.length < minLength) return `Min length is ${minLength} symbols`
    return undefined;
})

export const email = value => {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)  // not mine
        ? 'Invalid email address'
        : undefined
}