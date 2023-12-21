import React, { useState } from "react";
import {
  CardContent,
  CardHeader,
  Label,
  Container,
  TransactionCard,
  InputLabel,
  Value,
  CardText,
  InputField,
  SendIcon,
  InputPlaceholder,
  InputSubLabel,
  Field,
  SendButton,
  CancelButton,
} from "./StyledTransaction";
import {
  FlexCenter,
  FlexJustifiedBottom,
  FlexRight,
  Heading,
  HorizontalDivider,
  PageSection,
  PageSubTitle,
  PageTitle,
} from "../../Global/StyledGlobal";

export const Transaction: React.FC = () => {
  const [amount, setAmount] = useState("");
  const [futurePass, setFuturePass] = useState("Legend.ROOT");

  return (
    <PageSection>
      <Container>
        <Heading>
          <PageTitle>Send And Receive Using RNS</PageTitle>
          <PageSubTitle>
            Dont waste time searching for your FuturePass or Root Network wallet
            address, simple register an RNS, attach it to your desired wallet
            address and presto! Now you can send and receive using your RNS!
          </PageSubTitle>
        </Heading>
        <FlexCenter>
          <TransactionCard>
            <CardHeader>
              <SendIcon className="fa-regular fa-paper-plane" />
              <CardText>Send Token</CardText>
            </CardHeader>
            <CardContent>
              <FlexJustifiedBottom>
                <div>
                  <CardText>XRP</CardText>
                  <Label>Amount Available</Label>
                  <Value>2.63882</Value>
                </div>
                <div>
                  <Label>Amount After Transaction</Label>
                  <Value>2.63882 XRP</Value>
                </div>
              </FlexJustifiedBottom>
              <HorizontalDivider margin="32px" />
              <div>
                <Field>
                  <InputLabel>
                    Enter the FuturePass or Wallet Address you want to send this
                    token to
                  </InputLabel>
                  <InputPlaceholder
                    htmlFor="FuturePass"
                    isActive={futurePass !== ""}
                  >
                    FuturePass or Wallet Address
                  </InputPlaceholder>
                  <InputField
                    id="FuturePass"
                    type="text"
                    placeholder="FuturePass or Wallet Address"
                    value={futurePass}
                    onChange={(event) => {
                      setFuturePass(event.target.value);
                    }}
                  />
                </Field>
                <Field>
                  <InputLabel>Enter the amount you want to send</InputLabel>
                  <InputPlaceholder htmlFor="Amount" isActive={amount !== ""}>
                    Amount
                  </InputPlaceholder>
                  <InputField
                    id="Amount"
                    type="text"
                    placeholder="Amount"
                    value={amount}
                    onChange={(event) => {
                      setAmount(event.target.value);
                    }}
                    isActive={amount !== ""}
                  />
                  <InputSubLabel>Tx Fee: 0.00 XRP</InputSubLabel>
                </Field>
              </div>
              <FlexRight>
                <CancelButton>Cancel</CancelButton>
                <SendButton disabled={amount === "" || futurePass === ""}>
                  Send
                </SendButton>
              </FlexRight>
            </CardContent>
          </TransactionCard>
        </FlexCenter>
      </Container>
    </PageSection>
  );
};

export default Transaction;
