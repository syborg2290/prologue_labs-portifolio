import React from 'react';
import Head from "next/head";
import { Layout } from "../components";
import {
  Hero,
  Services,
  HowWeWork,
  Codu,
} from "../sections";
import { Element } from 'react-scroll'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Prologue Labs</title>
        </Head>
        <React.Fragment>
          <Element id='hero' name='hero'>
            <Hero />
          </Element>
          <Element id='codu' name='codu'>
            <Codu />
          </Element>
          <Element id='howework' name='howework'>
            <HowWeWork />
          </Element>
          <Element id='services' name='services'>
            <Services />
          </Element>
          <Codu />
        </React.Fragment>
      </Layout>
    </>
  );
}

