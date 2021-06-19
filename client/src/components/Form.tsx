import React, { useState } from "react";
import {
  Input,
  Button,
  VStack,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { postStatus } from "../api/api";

interface Data {
  message: string;
  alert: number;
  pass: string;
}

const Form: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const [alert, setAlert] = useState("1");
  const Submit = (data: Data) => {
    data.alert = parseInt(alert);
    postStatus(data);
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(Submit)}>
      <VStack spacing={4} pt={4}>
        <Input
          width="50vw"
          id="messsage"
          placeholder="message"
          {...register("message")}
        />{" "}
        <Input
          width="50vw"
          id="pass"
          type="password"
          placeholder="password"
          {...register("pass")}
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
        <Button type="submit">Submit</Button>
      </VStack>
    </form>
  );
};

export default Form;
