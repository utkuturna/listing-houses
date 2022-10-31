import { FunctionComponent } from 'react';
import Image from 'next/image';

interface IHouseDetail {
  Adres: string;
  HoofdFoto: string;
  Postcode: string;
  Plaats: string;
  WoonOppervlakte: number;
  PerceelOppervlakte: number;
  VolledigeOmschrijving: string;
  WGS84_X: number;
  WGS84_Y: number;
  KoopPrijs: number;
}

const HouseDetail: FunctionComponent<IHouseDetail> = ({
  Adres,
  HoofdFoto,
  Postcode,
  Plaats,
  WoonOppervlakte,
  PerceelOppervlakte,
  VolledigeOmschrijving,
  WGS84_X,
  WGS84_Y,
  KoopPrijs,
}) => {
  return (
    <div className=" max-w-xl m-auto">
      {/* @todo add video support */}
      {/* @todo implement a photo gallery */}
      <div className="w-full flex justify-center items-center my-4">
        <div className="w-full aspect-video relative">
          <Image
            src={HoofdFoto}
            blurDataURL={HoofdFoto}
            alt="Cover Photo"
            layout="fill"
            objectFit="cover"
            priority={false}
            placeholder="blur"
          />
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-4">{Adres}</h2>
      <p className="text-gray-400 mb-4">
        {Postcode} - {Plaats}
      </p>
      <p className="text-gray-600 mb-4">
        {WoonOppervlakte} m² wonen | {PerceelOppervlakte} m² perceel
      </p>
      <p className="font-semibold text-lg mb-4">
        {new Intl.NumberFormat('nl-NL', {
          style: 'currency',
          currency: 'EUR',
        }).format(KoopPrijs)}
      </p>
      {WGS84_Y && WGS84_X && (
        <iframe
          className="aspect-video w-full mb-4"
          style={{ border: 0 }}
          loading="lazy"
          src={`https://maps.google.com/maps?q=${WGS84_Y},${WGS84_X}&hl=es;z=14&output=embed`}
        />
      )}
      <p className="mb-4">
        <b className="font-semibold text-xl mb-2 block">Omschrijving</b>
        {VolledigeOmschrijving}
      </p>
    </div>
  );
};

export default HouseDetail;
