import { Bold } from "../assets/styles/helpers";
import { StyledPlanInfo } from "../assets/styles/PlanInfo.styled";
import { ReactComponent as IconMusic } from "../assets/images/icon-music.svg";
import { LinkButton } from "../assets/styles/Button.styled";

export function PlanInfo() {
  return (
    <StyledPlanInfo>
      <IconMusic />
      <div>
        <Bold>Annual Plan</Bold>
        <p>$59.99/year</p>
      </div>
      <LinkButton>Change</LinkButton>
    </StyledPlanInfo>
  );
}
