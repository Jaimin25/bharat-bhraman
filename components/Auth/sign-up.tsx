"use client";

import NextLink from "next/link";
import axios from "axios";
import { Field, FieldInputProps, Form, Formik, FormikHelpers, FormikProps } from "formik";

import { SignUpFormikPropsValue } from "@/typings/auth/sigup-form-props";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function SignUpComponent() {
  const handleOnSubmit = async (values: SignUpFormikPropsValue, actions: FormikHelpers<SignUpFormikPropsValue>) => {
    try {
      const res = await axios.post("/api/auth/sign-up", {
        fullname: values.firstName.trim() + " " + values.lastName.trim(),
        email: values.email,
        mobileNo: values.mobileNo,
        password: values.password,
      });

      const resData = await res.data;

      console.log(resData);
      actions.setSubmitting(false);
    } catch (e) {
      //toast will go here
    }
  };

  const validateForm = (value: string) => {
    let error;
    if (!value) {
      error = "Required";
    }
    return error;
  };

  const validationConfirmPassword = (props: FormikProps<SignUpFormikPropsValue>) => {
    const values = props.values;
    const password = values.password;
    const cPassword = values.confirmPassword;

    let error;
    if (password !== cPassword) {
      error = "Password Not Matching";
    } else {
      error = null;
    }
    return error;
  };

  return (
    <Box className="sign-in-form w-full sm:w-1/2 lg:w-[40%]">
      <Card>
        <CardHeader>
          <Heading size="lg">Sign Up</Heading>
        </CardHeader>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            mobileNo: NaN,
            password: "",
            confirmPassword: "",
          }}
          onSubmit={handleOnSubmit}
        >
          {(props: FormikProps<SignUpFormikPropsValue>) => (
            <Form>
              <CardBody>
                <Stack gap="20px">
                  <Stack
                    direction="row"
                    className="flex"
                  >
                    <Box className="w-full">
                      <Field
                        name="firstName"
                        validate={validateForm}
                      >
                        {({
                          field,
                          form,
                        }: {
                          field: FieldInputProps<string>;
                          form: FormikProps<SignUpFormikPropsValue>;
                        }) => (
                          <FormControl isInvalid={!!form.errors.firstName && (form.touched.firstName as boolean)}>
                            <FormLabel fontWeight="normal">First Name</FormLabel>
                            <Input
                              {...field}
                              type="text"
                              placeholder="firstname"
                              required
                            />
                            <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                    <Box className="w-full">
                      <Field
                        name="lastName"
                        validate={validateForm}
                      >
                        {({
                          field,
                          form,
                        }: {
                          field: FieldInputProps<string>;
                          form: FormikProps<SignUpFormikPropsValue>;
                        }) => (
                          <FormControl isInvalid={!!form.errors.lastName && (form.touched.lastName as boolean)}>
                            <FormLabel fontWeight="normal">Last Name</FormLabel>
                            <Input
                              {...field}
                              type="text"
                              placeholder="lastname"
                              required
                            />
                            <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                  </Stack>
                  <Box>
                    <Field
                      name="email"
                      validate={validateForm}
                    >
                      {({
                        field,
                        form,
                      }: {
                        field: FieldInputProps<string>;
                        form: FormikProps<SignUpFormikPropsValue>;
                      }) => (
                        <FormControl isInvalid={!!form.errors.email && (form.touched.email as boolean)}>
                          <FormLabel fontWeight="normal">Email</FormLabel>
                          <Input
                            {...field}
                            type="email"
                            placeholder="email"
                            required
                          />
                          <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                  <Box>
                    <Field
                      name="mobileNo"
                      validate={validateForm}
                    >
                      {({
                        field,
                        form,
                      }: {
                        field: FieldInputProps<string>;
                        form: FormikProps<SignUpFormikPropsValue>;
                      }) => (
                        <FormControl isInvalid={!!form.errors.mobileNo && (form.touched.mobileNo as boolean)}>
                          <FormLabel fontWeight="normal">Mobile Number</FormLabel>
                          <InputGroup>
                            <InputLeftAddon>
                              <Text>+91</Text>
                            </InputLeftAddon>
                            <Input
                              {...field}
                              type="number"
                              placeholder="Mobile No."
                              required
                            />
                          </InputGroup>
                          <FormErrorMessage>{form.errors.mobileNo}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                  <Box>
                    <Field
                      name="password"
                      validate={validateForm}
                    >
                      {({
                        field,
                        form,
                      }: {
                        field: FieldInputProps<string>;
                        form: FormikProps<SignUpFormikPropsValue>;
                      }) => (
                        <FormControl isInvalid={!!form.errors.password && (form.touched.password as boolean)}>
                          <FormLabel fontWeight="normal">Password</FormLabel>
                          <Input
                            {...field}
                            type="password"
                            placeholder="password"
                            required
                          />
                          <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                  <Box>
                    <Field
                      name="confirmPassword"
                      validate={() => validationConfirmPassword(props)}
                    >
                      {({
                        field,
                        form,
                      }: {
                        field: FieldInputProps<string>;
                        form: FormikProps<SignUpFormikPropsValue>;
                      }) => (
                        <FormControl
                          isInvalid={!!form.errors.confirmPassword && (form.touched.confirmPassword as boolean)}
                        >
                          <FormLabel fontWeight="normal">Confirm Password</FormLabel>
                          <Input
                            {...field}
                            type="password"
                            placeholder="confirm password"
                            required
                          />
                          <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                  <Box>
                    <Text>
                      Already have an account?{" "}
                      <NextLink
                        href="/auth/signin"
                        className="font-semibold text-green-600 underline hover:no-underline"
                      >
                        Sign In
                      </NextLink>
                    </Text>
                  </Box>
                  <Box>
                    <Button
                      className="w-full"
                      colorScheme="green"
                      isLoading={props.isSubmitting}
                      type="submit"
                    >
                      Sign Up
                    </Button>
                  </Box>
                </Stack>
              </CardBody>
            </Form>
          )}
        </Formik>
      </Card>
    </Box>
  );
}
