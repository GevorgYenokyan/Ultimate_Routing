import { memo, useCallback } from "react";
import { Form, Input } from "antd";
import { FormInputsType } from "../projectDataType/projectDataTyps";
import { formItem } from "./style/style";
interface RenderFormInpoutsType {
  registerData: FormInputsType[];
}

function RenderFormInpouts({
  registerData,
}: RenderFormInpoutsType): JSX.Element {
  const inputs = useCallback(() => {
    const registerFormInpouts = registerData.map(
      (el: FormInputsType): JSX.Element => {
        const { name, placeholder, type, id } = el;
        return (
          <Form.Item
            style={formItem}
            key={`${id}`}
            name={name}
            rules={[
              { required: true, message: `Please input your ${placeholder}!` },
            ]}
          >
            <Input
              // prefix={<LockOutlined className="site-form-item-icon" />}
              type={type}
              placeholder={placeholder}
            />
          </Form.Item>
        );
      }
    );
    return registerFormInpouts;
  }, []);

  return <>{inputs()}</>;
}

export default memo(RenderFormInpouts);
