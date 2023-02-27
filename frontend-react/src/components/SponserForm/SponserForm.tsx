import React from "react";
import "./SponserForm.css";
import { Form, Input, Button } from "antd";
import Navbar from "../Navbar/Navbar.tsx";
import Footer from "../Footer/Footer.tsx";
const SponserForm = () => {
  const { TextArea } = Input;
  const courseName='Structural Steel Supervision'
  return (
    <>
      <Navbar />
      <div className="sform-container">
        <div className="sform-header">
        <h1>{courseName}</h1>
        </div>
        <div className="sform-content">
          <Form
            style={{
              margin: "2rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "4rem",
            }}
            autoComplete="off"
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "The name is required.",
                },
              ]}
            >
              <Input
                placeholder="Name:*"
                type="text"
                style={{
                  borderRadius: "5px",
                  border: "1px solid #000000",
                  width: "22rem",
                }}
              />
            </Form.Item>
            <Form.Item
              name="contact_number"
              rules={[
                {
                  required: true,
                  message: "The name is required.",
                },
              ]}
            >
              <Input
                placeholder="Contact-Number:*"
                type="number"
                style={{
                  borderRadius: "5px",
                  border: "1px solid #000000",
                  width: "22rem",
                }}
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "The name is required.",
                },
              ]}
            >
              <Input
                placeholder="E-mail:*"
                style={{
                  borderRadius: "5px",
                  border: "1px solid #000000",
                  width: "22rem",
                }}
              />
            </Form.Item>
            <Form.Item
              name="alternative_email"
              rules={[
                {
                  required: true,
                  message: "The name is required.",
                },
              ]}
            >
              <Input
                placeholder="Alternative-Email:"
                type="email"
                style={{
                  borderRadius: "5px",
                  border: "1px solid #000000",
                  width: "22rem",
                }}
              />
            </Form.Item>
            <Form.Item
              name="company_name"
              rules={[
                {
                  required: true,
                  message: "The name is required.",
                },
              ]}
            >
              <Input
                placeholder="Company-Name:"
                style={{
                  borderRadius: "5px",
                  border: "1px solid #000000",
                  width: "22rem",
                }}
              />
            </Form.Item>
            <Form.Item
              name="FIN/NRIC/Passport_No"
              rules={[
                {
                  required: true,
                  message: "The name is required.",
                },
              ]}
            >
              <Input
                placeholder="FIN/NRIC/Passport_No:*"
                style={{
                  borderRadius: "5px",
                  border: "1px solid #000000",
                  width: "22rem",
                }}
              />
            </Form.Item>
            <Form.Item
              name="membership_type"
              rules={[
                {
                  required: true,
                  message: "The name is required.",
                },
              ]}
            >
              <Input
                placeholder="Membership-Type:*"
                style={{
                  borderRadius: "5px",
                  border: "1px solid #000000",
                  width: "22rem",
                }}
              />
            </Form.Item>
            <Form.Item
              name="membership_no"
              rules={[
                {
                  required: true,
                  message: "The name is required.",
                },
              ]}
            >
              <Input
                placeholder="Membership-No:"
                style={{
                  borderRadius: "5px",
                  border: "1px solid #000000",
                  width: "22rem",
                }}
              />
            </Form.Item>
            <Form.Item
              name="postal_code"
              rules={[
                {
                  required: true,
                  message: "The name is required.",
                },
              ]}
            >
              <Input
                placeholder="Postal-Code:*"
                type="number"
                style={{
                  borderRadius: "5px",
                  border: "1px solid #000000",
                  width: "22rem",
                }}
              />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "The name is required.",
                },
              ]}
            >
              <TextArea
                placeholder="Address:*"
                style={{
                  borderRadius: "5px",
                  border: "1px solid #000000",
                  width: "22rem",
                }}
              />
            </Form.Item>

            {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item> */}
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SponserForm;
