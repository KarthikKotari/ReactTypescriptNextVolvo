import carData from '../public/api/cars.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import React, { useRef, useState, useEffect } from 'react';
import { Flex, Text, Icon, Grid, Row, TabNav, TabNavItem } from 'vcc-ui';

import Link from 'next/link';
import { NextPage } from 'next';
//Interface
interface CarObj {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

const CarHome: NextPage = () => {
  const [filterData, setFilterData] = useState([]);
  const [carData, setCarData] = useState([]);

  //Slider settings
  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  //Fetching the JSON data from the api
  useEffect(() => {
    fetch('./api/cars.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCarData(data);
        setFilterData(data);
      })
      .catch((e) => console.log('Error:', e));
  }, []);

  //Function for filters
  //Fetching all the bodyTypes from 'carData'
  //'carBodyTpes' contains all 'bodyType', rendering those in 'TabNav'
  const filterBodyTypes = () => {
    const carBodyType = [
      ...new Set(carData.map((carType: CarObj) => carType.bodyType)),
    ];
    return (
      <TabNav>
        <TabNavItem value="All Cars" onClick={filterClicked}>
          All
        </TabNavItem>
        {carBodyType.map((item: string, index) => {
          return (
            <>
              <TabNavItem
                style={{ textTransform: 'capitalize' }}
                key={index}
                value={item}
                onClick={filterClicked}
              >
                {item}
              </TabNavItem>{' '}
            </>
          );
        })}
      </TabNav>
    );
  };

  //Called by 'onClick'
  const filterClicked = (e: any) => {
    const cars: any = [...carData];
    const carsFiltered: any = cars
      .map((t: CarObj) => (e.target.value === t.bodyType ? t : null))
      .filter((t: any) => t != null);

    if (carsFiltered.length > 0) {
      //Filtered data
      setFilterData(carsFiltered);
    } else {
      //Default data
      setFilterData(cars);
    }
  };

  //Slider
  const slider = useRef<Slider>(null);

  return (
    <>
      <Flex extend={{ padding: 16 }} className="Home">
        {filterBodyTypes()}
        <Slider ref={slider} {...settings}>
          {filterData.map((car: CarObj) => (
            <Flex key={car.id}>
              <Flex className="car-detail" aria-hidden="true" tabIndex={-1}>
                <Text subStyle="emphasis" extend={{ color: '#808c98' }}>
                  {car.bodyType.toUpperCase()}
                </Text>
                <Flex className="model-name-type">
                  <Text
                    subStyle="emphasis"
                    extend={{ paddingRight: '10px', paddingBottom: '15px' }}
                  >
                    {car.modelName}
                  </Text>
                  <Text subStyle="emphasis" extend={{ color: '#808c98' }}>
                    {car.modelType}
                  </Text>
                </Flex>
              </Flex>
              <img
                src={car.imageUrl}
                title={car.modelName}
                alt={car.modelName}
                className="car-img"
              />
              <Grid>
                <Row align="center">
                  <Link
                    href={{
                      pathname: '/CarInfo',
                      query: {
                        id: car.id,
                        details: car.bodyType,
                        image: car.imageUrl,
                      },
                    }}
                    as={`/learn/${car.id}`}
                  >
                    <a>
                      <Text subStyle="emphasis" extend={{ color: '#1c6bba' }}>
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
                        id: car.id,
                        details: car.bodyType,
                        image: car.imageUrl,
                      },
                    }}
                    as={`/shop/${car.id}`}
                  >
                    <a>
                      <Text subStyle="emphasis" extend={{ color: '#1c6bba' }}>
                        SHOP{' '}
                        <small>
                          <i className="bi bi-chevron-right"></i>
                        </small>
                      </Text>
                    </a>
                  </Link>
                </Row>
              </Grid>
            </Flex>
          ))}
        </Slider>
        <Flex className="button-nav">
          <button
            aria-label="previous"
            onClick={() => slider?.current?.slickPrev()}
          >
            <Icon type="mediacircled-previous-40"></Icon>
          </button>
          <button
            aria-label="previous"
            onClick={() => slider?.current?.slickNext()}
          >
            <Icon type="mediacircled-next-40"></Icon>
          </button>
        </Flex>
      </Flex>
    </>
  );
};

export default CarHome;
