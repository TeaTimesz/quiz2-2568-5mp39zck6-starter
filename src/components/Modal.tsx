import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
  Container,
} from "@mantine/core";

type AddExpenseModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (name: string, amount: number | string, category: string) => void;
};

export default function AddExpenseModal({}: AddExpenseModalProps) {

  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string | number>(0);
  const [category, setCategory] = useState<string | null>(null);

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return (
    <Container>
      <Stack gap="md">
        <Modal opened onClose={close} title="Authentication">
          <TextInput
            label="Expense Name"
            description="Expense Name"
            placeholder="E.G.,Coca Cola"
          />

          <NumberInput label="Amount" description="Amount" placeholder="0" />

          <Select
            label="Category"
            placeholder="Select Category"
            data={["Food", "Tranports", "Entertainment"]}
          />

          <Button variant="filled" fullWidth>Submit</Button>
        </Modal>
        
      </Stack>
    </Container>
  );
}
