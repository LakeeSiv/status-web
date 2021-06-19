import React from "react";
import { Input, Button, Box, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const Form: React.FC = () => {
  const { register, handleSubmit } = useForm();
  return (
    <form>
      <VStack spacing={4} pt={4}>
        <Input
          width="50vw"
          id="messsage"
          placeholder="message"
          {...register("message")}
        />
        <Input
          width="50vw"
          id="alert"
          placeholder="alert"
          {...register("alert")}
        />
      </VStack>
    </form>
  );
};

export default Form;
