import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Block, Text } from 'vcc-ui';
import { Breadcrumbs } from '@volvo-cars/react-breadcrumbs';

const CarShop: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Breadcrumbs
        trail={[{ title: 'Home', href: '../../CarHome' }]}
        currentTitle={`${router.query.id}`}
      />
      <div className="Learn">
        <img
          src={`${router.query.image}`}
          className="img-fluid"
          alt={`${router.query.id}`}
          title={`${router.query.id}`}
        ></img>
        <Block extend={{ textAlign: 'center' }}>
          <Text variant="hillary" subStyle="emphasis">
            Luxury at a small price
          </Text>

          <Text variant="bates" subStyle="inline-link">
            Shop the new {router.query.id}
          </Text>
        </Block>
      </div>
    </>
  );
};
export default CarShop;
