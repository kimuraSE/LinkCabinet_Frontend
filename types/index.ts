
export type Links = {
    id : number;
    title : string;
    url : string;
    created_at : string;
}

export type CsrfToken = {
    csrf_token : string;
}

export type loginCredential = {
    email: string;
    password: string;
  }

export type registerCredential = {
    name: string;
    email: string;
    password: string;
}
