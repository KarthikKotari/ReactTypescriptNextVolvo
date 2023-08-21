import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Block, Text } from 'vcc-ui';
import { Breadcrumbs } from '@volvo-cars/react-breadcrumbs';
import Image from 'next/image';
import styles from './styles.module.css';

const CarShop: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Breadcrumbs
        trail={[{ title: 'Home', href: '../../CarHome' }]}
        currentTitle={`${router.query.id}`}
      />
      <div className={styles.imgContainer}>
        <Image
          src={`${router.query.image}`}
          alt={`${router.query.id}`}
          title={`${router.query.id}`}
          width={800}
          height={600}


        />
      </div>
      <div>
        <Block extend={{ textAlign: 'center' }}>
          <Text variant="hillary" subStyle="emphasis">
            Luxury at a small price
          </Text>

          <Text variant="bates" subStyle="inline-link">
            Shop the new {router.query.id}
          </Text>
        </Block>
      </div >
    </>
  );
};
export default CarShop;
