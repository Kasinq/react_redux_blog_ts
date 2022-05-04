import React from 'react'
import InstagramEmbed from 'react-instagram-embed'

export const InstagramGetPosts = () => {
    return (
        <div>
            <InstagramEmbed
                url='https://www.instagram.com/p/CDeoCafnbGk/'
                clientAccessToken='123|456'
                maxWidth={320}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => { }}
                onSuccess={() => { }}
                onAfterRender={() => { }}
                onFailure={() => { }}
            />
        </div>
    )
}
