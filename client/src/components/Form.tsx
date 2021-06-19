import React, { useState } from "react";
import {
  Input,
  Button,
  Box,
  VStack,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const Form: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const [alert, setAlert] = useState("1");
  return (
    <form>
      <VStack spacing={4} pt={4}>
        <Input
          width="50vw"
          id="messsage"
          placeholder="message"
          {...register("message")}
        />
        <RadioGroup onChange={setAlert} value={alert}>
          <Stack direction="row" spacing={10}>
            <Radio value="1">1</Radio>
            <Radio value="2">2</Radio>
            <Radio value="3">3</Radio>
            <Radio value="4">4</Radio>
            <Radio value="5">5</Radio>
          </Stack>
        </RadioGroup>
      </VStack>
    </form>
  );
};

export default Form;
