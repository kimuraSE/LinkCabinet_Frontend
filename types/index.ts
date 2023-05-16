
export type Links = {
    id : number,
    title : string,
    url : string,
    created_at : string,
}

export type CsrfToken = {
    csrf_token : string
}

export type Credential = {
    email : string,
    password : string,
}
