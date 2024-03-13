import React, { useState } from "react";
import { Flex } from "../../Global/StyledGlobal";
import {
  EmailContainer,
  Title,
  SubscribeField,
  Subscription,
  Subtitle,
  SubscribeButton,
  ErrorText,
} from "./StyledFooter";
import { isEmailValid } from "@/app/global/util";
import { CircularProgress } from "@mui/material";
import axios from "axios";

export const EmailSubscription: React.FC = () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const baseId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
  const airTableUrl = process.env.NEXT_PUBLIC_AIRTABLE_URL;

  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<number | null>(null);
  const [isValid, setIsValid] = useState<boolean>(true);

  const createData = async (body: any) => {
    setIsLoading(true);

    const url = `${airTableUrl}/${baseId}/Subscription`;
    const response = await axios.post(
      url,
      { records: body },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    setStatus(response.status);
    setIsLoading(false);
  };

  const handleOnSubscribe = async () => {
    const isValid = isEmailValid(inputValue);
    setIsValid(isValid);

    if (inputValue && isValid) {
      const records = [
        {
          fields: {
            Email: inputValue,
          },
        },
      ];

      createData(records);
    }
  };

  return (
    <EmailContainer id="stay-in-the-loop">
      <Subscription>
        <Title>Stay in the Loop</Title>
        <Subtitle>
          Join our mailing list to stay in the loop with our newest feature
          releases, Partnership Announcements and special offers.{" "}
        </Subtitle>
        <div>
          <Flex>
            <SubscribeField
              error={!isValid}
              required
              variant="outlined"
              placeholder="Your Email Address here..."
              fullWidth
              onChange={(event) => {
                const { value } = event.target;
                setInputValue(value);
                setIsValid(true);
                setStatus(null);
              }}
              InputProps={{
                endAdornment:
                  isLoading && status === null ? (
                    <CircularProgress size={24} sx={{ ml: 2 }} />
                  ) : status === 200 ? (
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "green" }}
                    />
                  ) : (
                    <></>
                  ),
              }}
            />
            <SubscribeButton
              onClick={() => {
                return handleOnSubscribe();
              }}
            >
              Subscribe
            </SubscribeButton>
          </Flex>
          {!isValid && <ErrorText>Email is not valid!</ErrorText>}
        </div>
      </Subscription>
    </EmailContainer>
  );
};

export default EmailSubscription;
