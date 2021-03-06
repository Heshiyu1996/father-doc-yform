import React from 'react';
import { YForm } from 'father-doc-yform';
import { YFormOneLineProps } from 'father-doc-yform/lib/YForm/component/OneLine';

const layout = { labelCol: { span: 4 }, wrapperCol: { span: 20 } };

export default () => {
  return (
    <YForm {...layout} required>
      {[
        {
          label: '用户 1',
          type: 'oneLine',
          componentProps: { oneLineStyle: ['50%', 8, '50%'] },
          items: (): ReturnType<Required<YFormOneLineProps>['items']> => [
            { label: '姓名', type: 'input', name: 'name' },
            <span key="center" />,
            { label: '年龄', type: 'input', name: 'age' },
          ],
        },
        {
          label: '用户 2',
          type: 'oneLine',
          componentProps: { oneLineStyle: ['50%', 8, '50%'] },
          items: ({ style }): ReturnType<Required<YFormOneLineProps>['items']> => {
            return [
              { label: '姓名', type: 'input', name: 'name2' },
              <span key="center" />,
              {
                noStyle: true,
                shouldUpdate: true,
                children: () => {
                  return [{ style: style[2], label: '年龄', type: 'input', name: 'age2' }];
                },
              },
            ];
          },
        },
      ]}
    </YForm>
  );
};
