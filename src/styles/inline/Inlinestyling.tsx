import React, { ReactElement } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

interface Props {

}

const code = `<div
style={{
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    width: '500px',
    padding: '20px',
}}>
<h2 style={{
    fontSize: '24px',
    marginBottom: '10px'
}}>Title of the card</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas sequi error consequatur itaque sit suscipit ex, eos dignissimos fugiat harum fuga ullam vel, voluptate molestias veritatis adipisci labore libero?</p>
</div>`

export default function Inlinestyling({ }: Props): ReactElement {
    return (
        <>
            <div
                style={{
                    borderRadius: '8px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                    width: '500px',
                    padding: '20px',
                }}>
                <h2 style={{
                    fontSize: '24px',
                    marginBottom: '10px'
                }}>Title of the card</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas sequi error consequatur itaque sit suscipit ex, eos dignissimos fugiat harum fuga ullam vel, voluptate molestias veritatis adipisci labore libero?</p>
            </div>
            <div className="mt-10">
                <CopyBlock
                    language={'jsx'}
                    text={code}
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines
                    codeBlock
                />
            </div>
        </>
    )
}
