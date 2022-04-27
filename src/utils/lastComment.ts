export function lastComment(comment: any, showComments: boolean ){
    if (showComments) return comment
    return comment?.slice(-1)
}