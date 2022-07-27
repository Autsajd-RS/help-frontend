import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';

const CreateUserForm = () => {
  const [form] = useForm();

  return (
    <div>
      <Form title="Dodaj novog korisnika u sistem" layout="vertical" form={form}>
        <Form.Item name="email" label="Email">
          <Input type="email" />
        </Form.Item>
        <Form.Item name="firstName" label="Ime">
          <Input />
        </Form.Item>
        <Form.Item name="lastName" label="Prezime">
          <Input />
        </Form.Item>
        <Form.Item name="dateOfBirth" label="Datum rođenja">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Lozinka">
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Adresa">
          <Input />
        </Form.Item>
        <Form.Item name="jmbg" label="JMBG">
          <Input />
        </Form.Item>
        <Form.Item name="phoneNumber" label="Kontak telefon">
          <Input />
        </Form.Item>
        <Form.Item name="lbo" label="LBO">
          <Input />
        </Form.Item>
        <Form.Item name="roles" label="Role">
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Kreiraj
        </Button>
      </Form>
    </div>
  );
};

export default CreateUserForm;
