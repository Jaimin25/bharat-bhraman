"use client";

import NextLink from "next/link";
import { Field, FieldInputProps, Form, Formik, FormikHelpers, FormikProps } from "formik";

import { signInUser } from "@/store/appwriteService";
import { SignInFormikPropsValue } from "@/typings/auth/sigin-form-props";
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
  Stack,
  Text,
} from "@chakra-ui/react";

export default function SignInComponent() {
  const handleSubmit = async (values: SignInFormikPropsValue, actions: FormikHelpers<SignInFormikPropsValue>) => {
    const user = await signInUser(values.email, values.password);
    console.log(user);
    actions.setSubmitting(false);
  };

  const validateForm = (value: string) => {
    let error;
    if (!value) {
      error = "Required";
    }
    return error;
  };

  return (
    <Box className="sign-in-form w-full sm:w-1/2 lg:w-[40%]">
      <Card>
        <CardHeader>
          <Heading size="lg">Sign In</Heading>
        </CardHeader>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          {(props: FormikProps<SignInFormikPropsValue>) => (
            <Form>
              <CardBody>
                <Stack gap="20px">
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
                        form: FormikProps<SignInFormikPropsValue>;
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
                      name="password"
                      validate={validateForm}
                    >
                      {({
                        field,
                        form,
                      }: {
                        field: FieldInputProps<string>;
                        form: FormikProps<SignInFormikPropsValue>;
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
                    <Text>
                      Don&apos;t have an account?{" "}
                      <NextLink
                        href="/auth/signup"
                        className="font-semibold text-green-600 underline hover:no-underline"
                      >
                        Sign Up
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
                      Sign In
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