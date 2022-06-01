import React from 'react'
import Input from './elements/Input';
import Textarea from './elements/Textarea';
import Number from './elements/Number';
import Dropdown from './elements/Dropdown';
import FileElement from './elements/FileElement';
import Checkbox from "./elements/Checkbox";

const Element = ({field, data}) => {
    switch (field.type) {
        case 'textarea':
            return (<Textarea field={field} data={data} />)
        case 'number':
            return (<Number field={field} data={data} />)
        case 'dropdown':
            return (<Dropdown field={field} data={data} />)
        case 'image':
            return (<FileElement field={field} data={data} />)
        case 'boolean':
            return (<Checkbox field={field} data={data} />)
        default:
            return (<Input field={field} data={data} />)
    }
}

export default Element