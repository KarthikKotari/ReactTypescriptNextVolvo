import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Block, Text } from 'vcc-ui';
import { Breadcrumbs } from '@volvo-cars/react-breadcrumbs';
import Image from 'next/image';
import styles from './styles.module.css';

const CarInfo: NextPage = () => {
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
