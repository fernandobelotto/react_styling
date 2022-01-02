import { ReactElement } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
import styled from 'styled-components'

const Card = styled.div`
  width: 500px;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const Title = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
`

const CardBody = styled.p``


const code = `import styled from 'styled-components'

const Card = styled.div\`
  width: 500px;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
\`;

const Title = styled.h2\`
    font-size: 24px;
    margin-bottom: 10px;\`

function FullCard() {
    return (
        <>
            <Card>
                <Title>Title of the card</Title>
                <CardBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas sequi error consequatur itaque sit suscipit ex, eos dignissimos fugiat harum fuga ullam vel, voluptate molestias veritatis adipisci labore libero?</CardBody>
            </Card>
        </>
    )
}`


export default function Stylecomponents({ }: {}): ReactElement {
    return (
        <>
            <Card>
                <Title>Title of the card</Title>
                <CardBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas sequi error consequatur itaque sit suscipit ex, eos dignissimos fugiat harum fuga ullam vel, voluptate molestias veritatis adipisci labore libero?</CardBody>
            </Card>

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
