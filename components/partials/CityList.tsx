import { FunctionComponent } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ICityList {
  list: IHouse[];
}

interface IHouse {
  Id: string;
  Foto: string;
  FotoLarge: string;
  Adres: string;
  Postcode: string;
  Woonplaats: string;
  KoopprijsTot: number;
  AantalKamers: number;
  WoonOppervlakteTot: number;
}

const CityList: FunctionComponent<ICityList> = ({ list }) => {
  return (
    <>
      {list.length === 0 && (
        <div>
          <p className="mb-4">No results found for this city!</p>
          <Link href={'/'}>
            <a className="font-bold underline">Return To Homepage</a>
          </Link>
        </div>
      )}
      {list.map((house) => (
        <div
          key={house.Id}
          className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-gray-400"
        >
          <div className="col-span-1 w-full aspect-video relative">
            <Image
              src={house.FotoLarge}
              blurDataURL={house.Foto}
              alt="Cover Photo"
              layout="fill"
              objectFit="cover"
              priority={false}
              placeholder="blur"
            />
          </div>
          <div className="col-span-2">
            <h2 className="font-semibold text-cyan-800">{house.Adres}</h2>
            <p>
              {house.Postcode} - {house.Woonplaats}
            </p>
            <p className="font-semibold">
              {new Intl.NumberFormat('nl-NL', {
                style: 'currency',
                currency: 'EUR',
              }).format(house.KoopprijsTot)}
            </p>
            <p>
              {house.WoonOppervlakteTot} m2{' '}
              <span className="text-xs mx-2">-</span> {house.AantalKamers}{' '}
              kamers
            </p>
          </div>
        </div>
      ))}
      <div>pagination</div>
      {/* @todo implement pagination */}
    </>
  );
};

export default CityList;
