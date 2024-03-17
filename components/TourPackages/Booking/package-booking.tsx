"use client";

// import { AppwriteException } from "appwrite";
import { Field, FieldInputProps, Form, Formik, FormikHelpers, FormikProps } from "formik";
import { v4 as uuidv4 } from "uuid";

import useFetchDetails from "@/app/_hooks/useFetchDetails";
import { useSession } from "@/app/_providers/session-provider";
import { useToast } from "@/app/_providers/toast-provider";
import PackageBookingSkeleton from "@/components/Skeleton/package-booking-skeleton";
import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
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
import { BookingQuery, Package } from "@prisma/client";

export default function PackageBookingComponent({ pID }: { pID: string }) {
  const { toastError } = useToast();
  const { sessionUser } = useSession();
  const { resData, isFetching } = useFetchDetails<Package>("/api/tour_packages/details", pID);

  if (isFetching) {
    return <PackageBookingSkeleton />;
  }

  const handleSubmit = async (values: BookingQuery, actions: FormikHelpers<BookingQuery>) => {
    actions.setSubmitting(true);
    try {
      // const res = await;
      // if (res instanceof AppwriteException) {
      //   toastError("Error", res.message);
      // }
      values.uid = sessionUser?.$id as string;
      values.fullname = sessionUser?.name as string;
      values.email = sessionUser?.email as string;
      values.mobileNo = sessionUser?.phone as string;

      console.log(values);
      setTimeout(() => {
        console.log("t");
        actions.setSubmitting(false);
      }, 2000);
    } catch (error) {
      toastError("Error", (error as Error).message);
    }
  };

  const validateForm = (value: string) => {
    let error;
    if (!value) {
      error = "Required";
    }
    return error;
  };

  return (
    <Box className="w-full sm:w-2/5">
      <Card>
        <Formik
          initialValues={{
            id: uuidv4(),
            pID: pID,
            packageTitle: resData?.packageTitle as string,
            uid: "",
            fullname: "",
            email: "",
            mobileNo: "",
            adults: "2",
            child: "0",
            infant: "0",
            status: "pending",
            createdAt: new Date(new Date().toISOString()),
            updatedAt: new Date(new Date().toISOString()),
          }}
          onSubmit={handleSubmit}
        >
          {(props: FormikProps<BookingQuery>) => (
            <Form>
              <CardBody className="space-y-4">
                <Heading size="md">Query Form</Heading>
                <Stack gap="20px">
                  <Box>
                    <Field name="packageTitle">
                      {({ field, form }: { field: FieldInputProps<string>; form: FormikProps<BookingQuery> }) => (
                        <FormControl isInvalid={!!form.errors.packageTitle && (form.touched.packageTitle as boolean)}>
                          <FormLabel fontWeight="normal">Package Name</FormLabel>
                          <Input
                            {...field}
                            type="text"
                            value={form.values.packageTitle}
                            isReadOnly
                          />
                          <FormErrorMessage>{form.errors.packageTitle}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                  <Box className="flex gap-4">
                    <Box>
                      <Field
                        name="adults"
                        validate={validateForm}
                      >
                        {({ field, form }: { field: FieldInputProps<string>; form: FormikProps<BookingQuery> }) => (
                          <FormControl isInvalid={!!form.errors.adults && (form.touched.adults as boolean)}>
                            <FormLabel fontWeight="normal">Adults</FormLabel>
                            <Input
                              {...field}
                              type="number"
                              value={form.values.adults}
                              required
                            />
                            <FormErrorMessage>{form.errors.adults}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                    <Box>
                      <Field
                        name="child"
                        validate={validateForm}
                      >
                        {({ field, form }: { field: FieldInputProps<string>; form: FormikProps<BookingQuery> }) => (
                          <FormControl isInvalid={!!form.errors.child && (form.touched.child as boolean)}>
                            <FormLabel fontWeight="normal">Child</FormLabel>
                            <Input
                              {...field}
                              type="number"
                              value={form.values.child}
                              required
                            />
                            <FormErrorMessage>{form.errors.child}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                    <Box>
                      <Field
                        name="infant"
                        validate={validateForm}
                      >
                        {({ field, form }: { field: FieldInputProps<string>; form: FormikProps<BookingQuery> }) => (
                          <FormControl isInvalid={!!form.errors.infant && (form.touched.infant as boolean)}>
                            <FormLabel fontWeight="normal">Infant</FormLabel>
                            <Input
                              {...field}
                              type="number"
                              value={form.values.infant}
                              required
                            />
                            <FormErrorMessage>{form.errors.infant}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                  </Box>
                  <Divider />
                  <Box>
                    <Field name="fullname">
                      {({ field, form }: { field: FieldInputProps<string>; form: FormikProps<BookingQuery> }) => (
                        <FormControl>
                          <FormLabel fontWeight="normal">Full Name</FormLabel>
                          <Input
                            {...field}
                            type="text"
                            value={sessionUser?.name}
                            isReadOnly
                          />
                          <FormErrorMessage>{form.errors.fullname}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                  <Box>
                    <Field name="email">
                      {({ field, form }: { field: FieldInputProps<string>; form: FormikProps<BookingQuery> }) => (
                        <FormControl>
                          <FormLabel fontWeight="normal">Email</FormLabel>
                          <Input
                            {...field}
                            type="text"
                            value={sessionUser?.email}
                            isReadOnly
                          />
                          <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                  <Box>
                    <Field name="mobileNo">
                      {({ field, form }: { field: FieldInputProps<string>; form: FormikProps<BookingQuery> }) => (
                        <FormControl>
                          <FormLabel fontWeight="normal">Mobile No.</FormLabel>

                          <InputGroup>
                            <InputLeftAddon>
                              <Text>+91</Text>
                            </InputLeftAddon>
                            <Input
                              {...field}
                              type="text"
                              value={sessionUser?.phone}
                              isReadOnly
                            />
                          </InputGroup>
                          <FormErrorMessage>{form.errors.mobileNo}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                  <Box>
                    <Button
                      className="w-full"
                      colorScheme="green"
                      isDisabled={props.isSubmitting}
                      type="submit"
                    >
                      Submit
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
