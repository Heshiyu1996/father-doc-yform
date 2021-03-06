---
title: Hooks
nav:
  title: 文档
---

# Hooks

## useFormatFieldsValue

- 表单提交前处理数据

### 用例

```tsx
import React from 'react';
import { Input } from 'antd';
import { YForm } from 'father-doc-yform';

const layout = { labelCol: { span: 4 }, wrapperCol: { span: 20 } };

export default () => {
  const { formatFieldsValue, onFormatFieldsValue } = YForm.useFormatFieldsValue();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  onFormatFieldsValue([
    { name: 'append_field', format: () => '追加字段' },
    { name: 'name', format: ({ name }) => `${name}_改变字段值` },
  ]);

  return (
    <YForm {...layout} onFinish={onFinish} formatFieldsValue={formatFieldsValue}>
      {[
        { type: 'input', label: '姓名', name: 'name' },
        {
          dataSource: [
            {
              type: 'button',
              noStyle: true,
              plugins: { disabled: false },
              componentProps: { type: 'primary', htmlType: 'submit', children: 'submit' },
            },
          ],
        },
      ]}
    </YForm>
  );
};
```

### API

| 参数                | 说明                  | 类型 | 默认值 |
| ------------------- | --------------------- | ---- | ------ |
| formatFieldsValue   | 在 `YForm` 添加该属性 | -    | -      |
| onFormatFieldsValue | 添加需要格式化的字段  | -    | -      |

## useSubmit

- 提交表单相关联的按钮
- 提交、保存按钮防连点
- 需要与 `submit` 结合使用

### 用例

```tsx
import React from 'react';
import { Input } from 'antd';
import { YForm } from 'father-doc-yform';

const layout = { labelCol: { span: 4 }, wrapperCol: { span: 20 } };

export default () => {
  const [form] = YForm.useForm();
  const {
    params: { typeName },
  } = YForm.useSubmit({ params: { type: 'create' } });

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <>
      <h4>{typeName}</h4>
      <YForm {...layout} required onFinish={onFinish}>
        {[{ type: 'input', label: '姓名', name: 'name' }, { type: 'submit' }]}
      </YForm>
    </>
  );
};
```

### API

- `useSubmit` 参数

| 参数   | 说明                        | 类型                           | 默认值 |
| ------ | --------------------------- | ------------------------------ | ------ |
| params | 页面参数，包括 `id`、`type` | { id?: string; type?: 'create' | 'edit' | 'view';} | - |

- `useSubmit` 返回

| 参数   | 说明     | 类型                            | 默认值 |
| ------ | -------- | ------------------------------- | ------ |
| params | 表单状态 | [ParamsObjType](#ParamsObjType) | -      |

### ParamsObjType

| 参数     | 说明         | 类型    | 默认值 |
| -------- | ------------ | ------- | ------ |
| id       | id           | string  | -      |
| create   | 新建         | boolean | -      |
| edit     | 编辑         | boolean | -      |
| view     | 查看         | boolean | -      |
| typeName | 当前状态文案 | string  | -      |
