import FundaLogo from '../../../public/images/fundawonen-logo.svg';
import {FunctionComponent} from "react";

export interface ILogo {}

const Logo: FunctionComponent<ILogo> = () => {
  return <FundaLogo width={101} height={36} />
}

export default Logo;
