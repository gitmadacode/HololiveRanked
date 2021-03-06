//Va a ser como un master page , un principal
//todo lo que este fuera del main pero dentro del div se va a utilizar en los diversos componentes
//De esa forma podemos tener header footer y se va a reutilizar en todos los componentes

import React from "react";
import Header from "./Header";
import { Global, css } from '@emotion/core';
import Head from 'next/head';

const Layout = (props) => {
  return (
    <>
        <Global
            styles={css`
                :root {
                    --gris: #3d3d3d;
                    --gris2: #6F6F6F;
                    --naranja: #DA552F;
                    --gris3: #DA552F;
                }
                html {
                    font-size: 62.5%;
                    box-sizing: border-box;
                }
                *,*:before,*:after{
                    box-sizing: inherit;
                }

                body {
                    font-size: 1.6rem;
                    line-height: 1.5;
                    font-family: 'PT Sans', sans-serif;
                }
                h1,h2,h3 {
                    margin: 0 0 2rem 0;
                    line-height: 1.5;
                }
                h1,h2 {
                    font-family: 'Roboto Slab', serif;
                    font-weight: 700;
                }   
                h3 {
                    font-family: 'PT Sans', sans-serif;
                }
                ul{
                    list-style: none;
                    margin:0;
                    padding:0;
                }
                a{
                    text-decoration: none;
                }
            `}
        />
        <Head>
               <html lang="es"/>
               <title>Reclutamiento hololive corp</title>
               <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous" />
               <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@1,400;1,700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet"/>
               <link href="/static/css/app.css" rel="stylesheet" />
        </Head>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
