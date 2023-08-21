import { Flex, Grid, Row, Text } from "vcc-ui"
import { CarObj } from "../pages/CarHome";
import Link from 'next/link';
import styles from './carcard.module.css';

export const CarCard = ({ id, modelName, bodyType, imageUrl, modelType }: CarObj) => {
    const buttonStyle = { color: '#1c6bba' }
    const textStyle = { color: '#808c98' }
    return (<Flex key={id}>
        <Flex className={styles.carDetail} aria-hidden="true" tabIndex={-1}>
            <Text subStyle="emphasis" extend={textStyle}>
                {bodyType.toUpperCase()}
            </Text>
            <Flex className="model-name-type">
                <Text
                    subStyle="emphasis"
                    extend={{ paddingRight: '10px', paddingBottom: '15px' }}
                >
                    {modelName}
                </Text>
                <Text subStyle="emphasis" extend={textStyle}>
                    {modelType}
                </Text>
            </Flex>
        </Flex>
        <img
            src={imageUrl}
            title={modelName}
            alt={modelName}
            className={styles.carImg}
        />
        <Grid>
            <Row align="center">
                <Link
                    href={{
                        pathname: '/CarInfo',
                        query: {
                            id: id,
                            details: bodyType,
                            image: imageUrl,
                        },
                    }}
                    as={`/learn/${id}`}
                >
                    <a>
                        <Text subStyle="emphasis" extend={buttonStyle}>
                            LEARN{' '}
                            <small>
                                <i className="bi bi-chevron-right"></i>
                            </small>
                        </Text>
                    </a>
                </Link>
                <Link
                    href={{
                        pathname: '/CarShop',
                        query: {
                            id: id,
                            details: bodyType,
                            image: imageUrl,
                        },
                    }}
                    as={`/shop/${id}`}
                >
                    <a>
                        <Text subStyle="emphasis" extend={buttonStyle}>
                            SHOP{' '}
                            <small>
                                <i className="bi bi-chevron-right"></i>
                            </small>
                        </Text>
                    </a>
                </Link>
            </Row>
        </Grid>
    </Flex>)
}