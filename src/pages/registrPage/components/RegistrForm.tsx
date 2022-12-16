import { FC, useState, memo } from "react";

import { registr } from "./registrRequests";

import { Button, Form } from "antd";

import registerData from "../registrPageData/authorizationData";
import RenderFormInpouts from "../../../components/renderFormInpouts";

import ErrorMessage from "../../../components/ErrorMessage";
import { MessageType } from "../../../projectDataType/projectDataTyps";

import { formItem, formStyle } from "../style";

const RegistrForm: FC = (): JSX.Element => {
  const [message, setMessage] = useState<MessageType>({
    text: "",
  });

  const close_error_messege = () => {
    setMessage({
      text: "",
    });
  };

  const onFinish = (values: any) => {
    registr(values, setMessage);
  };

  return (
    <Form
      name="registr"
      onFinish={onFinish}
      onValuesChange={close_error_messege}
      style={formStyle}
    >
      <RenderFormInpouts registerData={registerData} />
      <ErrorMessage message={message} />
      <Form.Item style={formItem}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default memo(RegistrForm);
