import { Button, Form } from "antd";
import RenderFormInpouts from "../../../components/renderFormInpouts";
import loginData from "../LoginData/loginData";
import { login } from "../loginRequests/loginRequests";
import ErrorMessage from "../../../components/ErrorMessage";
import { FC, useState, memo } from "react";
import { MessageType } from "../../../projectDataType/projectDataTyps";
import { formStyle, formItem } from "../style";

const LoginForm: FC = (): JSX.Element => {
  const [message, setMessage] = useState<MessageType>({
    text: "",
  });

  const close_error_messege = () => {
    setMessage({
      text: "",
    });
  };

  const onFinish = (values: any) => {
    login(values, setMessage);
  };

  return (
    <Form
      name="login"
      onFinish={onFinish}
      onValuesChange={close_error_messege}
      style={formStyle}
    >
      <RenderFormInpouts registerData={loginData} />
      <ErrorMessage message={message} />
      <Form.Item style={formItem}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default memo(LoginForm);
