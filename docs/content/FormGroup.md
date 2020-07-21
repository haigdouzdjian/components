---
title: FormGroup
---

Adds styles for multiple form elements used together.

## Default example

```jsx live
<FormGroup>
  <FormGroup.Label htmlFor="example-text">Example text</FormGroup.Label>
  <TextInput id="example-text" value="Example Value" />
</FormGroup>
<FormGroup>
  <FormGroup.Label htmlFor="example-text-b">Example text</FormGroup.Label>
  <TextInput id="example-text-b" value="Example Value" />
</FormGroup>
```

## System props

FormGroup components get `COMMON` system props. Read our [System Props](/system-props) doc page for a full list of available props.

## Component props

| Name    | Type   | Default | Description                                                                            |
| :------ | :----- | :-----: | :------------------------------------------------------------------------------------- |
| as      | String |  `div`  | Sets the HTML tag for the component                                                    |
| variant | String | default | Can be one of `input`, `select`, or `textarea` - sets the form type for the Form Group |