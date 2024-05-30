import React, { useState } from "react";
import { Container, VStack, HStack, Input, Button, Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [rows, setRows] = useState([{ account: "", description: "", debit: "", credit: "" }]);

  const addRow = () => {
    setRows([...rows, { account: "", description: "", debit: "", credit: "" }]);
  };

  const deleteRow = (index) => {
    const newRows = rows.filter((_, i) => i !== index);
    setRows(newRows);
  };

  const handleInputChange = (index, field, value) => {
    const newRows = rows.map((row, i) => (i === index ? { ...row, [field]: value } : row));
    setRows(newRows);
  };

  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={4} width="100%">
        <HStack width="100%" justifyContent="space-between">
          <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={addRow}>
            Add Row
          </Button>
        </HStack>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>Account</Th>
              <Th>Description</Th>
              <Th>Debit</Th>
              <Th>Credit</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {rows.map((row, index) => (
              <Tr key={index}>
                <Td>
                  <Input value={row.account} onChange={(e) => handleInputChange(index, "account", e.target.value)} />
                </Td>
                <Td>
                  <Input value={row.description} onChange={(e) => handleInputChange(index, "description", e.target.value)} />
                </Td>
                <Td>
                  <Input value={row.debit} onChange={(e) => handleInputChange(index, "debit", e.target.value)} />
                </Td>
                <Td>
                  <Input value={row.credit} onChange={(e) => handleInputChange(index, "credit", e.target.value)} />
                </Td>
                <Td>
                  <IconButton aria-label="Delete row" icon={<FaTrash />} colorScheme="red" onClick={() => deleteRow(index)} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Container>
  );
};

export default Index;
