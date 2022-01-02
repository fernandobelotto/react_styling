import React, { ReactElement } from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from './App';
import Cssfiles from './styles/css-files/Cssfiles';
import Cssmodules from './styles/css-modules/Cssmodules';
import Emotion from './styles/emotion/Emotion';
import Inlinestyling from './styles/inline/Inlinestyling';
import Less from './styles/less/Less';
import Sass from './styles/sass/Sass';
import Stitches from './styles/stitches/Stitches';
import Stylable from './styles/stylable/Stylable';
import Stylecomponents from './styles/style-components/Stylecomponents';
import Tailwindcss from './styles/tailwind/Tailwindcss';

export default function AppRoutes({ }: {}): ReactElement {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Cssfiles />} />
                        <Route path='/cssmodules' element={<Cssmodules />} />
                        <Route path='/inlinestyling' element={<Inlinestyling />} />
                        <Route path='/tailwindcss' element={<Tailwindcss />} />
                        <Route path='/less' element={<Less />} />
                        <Route path='/sass' element={<Sass />} />
                        <Route path='/emotion' element={<Emotion />} />
                        <Route path='/stylecomponents' element={<Stylecomponents />} />
                        <Route path='/stylable' element={<Stylable />} />
                        <Route path='/stitches' element={<Stitches />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
