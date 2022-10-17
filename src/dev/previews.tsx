import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import Button from "../components/UI/button/Button";
import App from "../App";
import Input from "../components/UI/input/Input";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Button">
                <Button/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/Input">
                <Input/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;