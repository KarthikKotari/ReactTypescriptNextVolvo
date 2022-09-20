import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Block, Text } from 'vcc-ui';
import { Breadcrumbs } from '@volvo-cars/react-breadcrumbs';

const CarInfo: NextPage = () => {
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
            New definition of Luxury
          </Text>

          <Text variant="bates" subStyle="inline-link">
            Presenting the {router.query.id}
          </Text>
        </Block>
      </div>
    </>
  );
};

export default CarInfo;
