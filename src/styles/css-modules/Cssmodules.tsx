import React, { ReactElement } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'
import style from './cssfiles.module.css'

const code = `<div className={style.card}>
    <h2 className={style.title}>Title of the card</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas sequi error consequatur itaque sit suscipit ex, eos dignissimos fugiat harum fuga ullam vel, voluptate molestias veritatis adipisci labore libero?</p>
</div>`

const css = `.card {
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    width: 500px;
    padding: 20px;
}

.title {
    font-size: 24px;
    margin-bottom: 10px;
}`

export default function Cssmodules({ }: {}): ReactElement {
    return (
        <>
            <div className={style.card}>
                <h2 className={style.title}>Title of the card</h2>
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
            <div className="mt-10">
                <CopyBlock
                    language={'css'}
                    text={css}
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines
                    codeBlock
                />
            </div>
        </>
    )
}
