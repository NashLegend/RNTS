enum Verbs{
    QUESTION_CREATE,
    UNKNOWN
}

export default function reflect(verb: string) {
    return Verbs[Verbs[verb]]
}