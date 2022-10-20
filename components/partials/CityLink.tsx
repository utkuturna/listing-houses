import { FunctionComponent } from 'react';
import Link from 'next/link';
import Button from '../ui/button/Button';

export interface ICityLink {
  id: number;
  label: string;
  link: string;
}

const CityLink: FunctionComponent<ICityLink> = ({ label, link }) => {
  return (
    <Link href={link}>
      <Button label={label} color="outline" />
    </Link>
  );
};

export default CityLink;
