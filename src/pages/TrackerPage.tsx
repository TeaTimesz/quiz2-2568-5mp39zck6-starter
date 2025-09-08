import { useState } from "react";
import { Button, Stack, Title, Divider, Container,Text} from "@mantine/core";
// import { v4 as uuidv4 } from "uuid";
// import ModalRegister from "../components/Modal";

type Expense = {
  id: string;
  name: string;
  amount: number | string;
  category: string;
};

export default function ExpenseTracker() {
  const [opened, setOpened] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  //const categories = ["Food", "Transport", "Entertainment"];

  const handleAdd = () =>{
    setOpened(true);
  };

  // const deletExpense = (exId: string) =>{
  //   setExpenses((prev)=> prev.filter((expenses)=> expenses.id !== exId));
  // };

  const TotalExpense = () => {
    let total = 0;
    for(let i = 0;i < expenses.length ;i++){
      total += Number(expenses[i].amount);
    }
    return total;
  };

  const FoodExpense = () => {
    let total = 0;
    for(let i = 0;i < expenses.length ;i++){
      if(expenses[i].category === "Food"){
        total += Number(expenses[i].amount);
      }
    }
    return total;
  }

  const TransportExpense = () => {
    let total = 0;
    for(let i = 0;i < expenses.length ;i++){
      if(expenses[i].category === "Transport"){
        total += Number(expenses[i].amount);
      }
    }
    return total;
  }

  const EntertainmentExpense = () => {
    let total = 0;
    for(let i = 0;i < expenses.length ;i++){
      if(expenses[i].category === "Entertainment"){
        total += Number(expenses[i].amount);
      }
    }
    return total;
  }

  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Expense Tracker
      </Title>
      <Button onClick={handleAdd}>Add Expense Item</Button>
      {/* {opened && <ModalRegister opened = {opened} onClose={close} onAdd={onAdd}></ModalRegister>} */}

      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total cost: {TotalExpense()} Baht</Title>
      <Stack my="sm">
        <Text size="sm">
          Food: {FoodExpense()} Baht
        </Text>
        <Text size="sm">
          Transport: {TransportExpense()} Baht
        </Text>
        <Text size="sm">
          Entertainment: {EntertainmentExpense()} Baht
        </Text>
      </Stack>

      <Divider my="md" />
      {/* Type additional card here. */}
      <Stack>{/* Type additional expense card list here. */}</Stack>
    </Container>
  );
}
