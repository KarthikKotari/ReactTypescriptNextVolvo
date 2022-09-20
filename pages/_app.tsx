import '../public/css/styles.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AppProps } from 'next/app';
import { StyleProvider, ThemePicker, Block, Nav, Logo } from 'vcc-ui';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <Block>
          <Nav sticky>
            <Block extend={{ padding: '20px' }}>
              <Logo height={16} />
            </Block>
          </Nav>
          <Block
            extend={{ marginTop: '100px', fontSize: '48px', width: '320px' }}
          ></Block>
        </Block>
        <Component {...pageProps} />
      </ThemePicker>
    </StyleProvider>
  );
}

export default MyApp;
