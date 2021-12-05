import { StyledOrderSummary } from "../assets/styles/OrderSummary.styled";
import { PlanInfo } from "./PlanInfo";
import ImageHero from "../assets/images/illustration-hero.svg";
import { Button } from "../assets/styles/Button.styled";

export function OrderSummary() {
  return (
    <StyledOrderSummary>
      <img src={ImageHero} alt="" />
      <h1>Order Summary</h1>
      <p>
        You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you
        like!
      </p>
      <PlanInfo />
      <Button primary>Proceed to Payment</Button>
      <Button>Cancel Order</Button>
    </StyledOrderSummary>
  );
}
