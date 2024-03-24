"use client";

import { useState } from "react";
import { AppwriteException } from "appwrite";
import axios from "axios";
import { Field, FieldInputProps, Form, Formik, FormikHelpers, FormikProps } from "formik";
import { v4 as uuidv4 } from "uuid";

import useFetchDetails from "@/src/app/_hooks/useFetchDetails";
import { useSession } from "@/src/app/_providers/session-provider";
import { useToast } from "@/src/app/_providers/toast-provider";
import BookingQueryConfirmModal from "@/src/components/Modal/booking-query-confirm-modal";
import PackageBookingSkeleton from "@/src/components/Skeleton/package-booking-skeleton";
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
  useDisclosure,
} from "@chakra-ui/react";
import { BookingQuery, Package } from "@prisma/client";

export default function PackageBookingComponent({ pID }: { pID: string }) {
  const { toastError } = useToast();
  const { sessionUser, currentSession } = useSession();
  const { resData, isFetchingDetails } = useFetchDetails<Package>("/api/tour_packages/details", [
    {
      key: "pID",
      value: pID,
    },
  ]);
  const [uuid, setUuid] = useState<string>();

  const { isOpen, onOpen, onClose } = useDisclosure();

  if (isFetchingDetails) {
    return <PackageBookingSkeleton />;
  }

  const handleSubmit = async (values: BookingQuery, actions: FormikHelpers<BookingQuery>) => {
    actions.setSubmitting(true);
    try {
      const uuid = uuidv4();
      setUuid(uuid);

      values.id = uuid;
      values.uid = sessionUser?.$id as string;
      values.fullname = sessionUser?.name as string;
      values.email = sessionUser?.email as string;
      values.mobileNo = sessionUser?.phone as string;

      const res = await axios.post("/api/tour_packages/query", {
        sessionId: currentSession,
        values,
      });

      if (res instanceof AppwriteException) {
        toastError("Error", res.message);
      }

      actions.setSubmitting(false);

      if (res.data.statusCode === 200) {
        onOpen();
      } else {
        toastError("Error", res.data.message);
      }
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
    <>
      <Box className="w-full sm:w-2/3 lg:w-2/5">
        <Card>
          <Formik
            initialValues={{
              id: "",
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
                            <FormLabel fontWeight="medium">Package Name</FormLabel>
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
                              <FormLabel fontWeight="medium">Adults</FormLabel>
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
                              <FormLabel fontWeight="medium">Child</FormLabel>
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
                              <FormLabel fontWeight="medium">Infant</FormLabel>
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
                            <FormLabel fontWeight="medium">Full Name</FormLabel>
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
                            <FormLabel fontWeight="medium">Email</FormLabel>
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
                            <FormLabel fontWeight="medium">Mobile No.</FormLabel>

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
                        isLoading={props.isSubmitting}
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
      <BookingQueryConfirmModal
        isOpen={isOpen}
        onClose={onClose}
        uuid={uuid as string}
      />
    </>
  );
}
