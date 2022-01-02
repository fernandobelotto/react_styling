import React, { ReactElement } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

interface Props {

}

const code = `<div className='shadow-md rounded-lg p-5 w-1/3'>
    <h2 className='text-2xl mb-2'>Title of the card</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas sequi error consequatur itaque sit suscipit ex, eos dignissimos fugiat harum fuga ullam vel, voluptate molestias veritatis adipisci labore libero?</p>
</div>`

export default function Tailwindcss({ }: Props): ReactElement {
    return (
        <>
            <div className='shadow-md rounded-lg p-5 w-1/3'>
                <h2 className='text-2xl mb-2'>Title of the card</h2>
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

