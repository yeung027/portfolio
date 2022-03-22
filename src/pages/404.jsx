import styles from '../styles/404/desktop.module.css'

// custom pages/404.jsx !! Do not remove please or it will break build

export default function Error() {



  return (

    <>

      <style global jsx>{`

          * {

            margin: 0;

            padding: 0;

            -webkit-text-size-adjust: none;

          }

          

          html, body {

            height: 100%;

            overflow: hidden;

          }

          

          body {

            padding: 0;

            margin: 0;

            background: #181828;

            font-size: 14px;

            line-height: 1;

          }

          

          label {

            cursor: pointer;

          }

          

          a {

            margin: 0;

            padding: 0;

            vertical-align: baseline;

            background: transparent;

            text-decoration: none;

            color: #000;

          }

          

          input, select, button, textarea {

            margin: 0;

            font-size: 100%;

          }

          

          html, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre,

          a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp,

          small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,

          fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, input {

            border: 0;

            outline: 0;

            font-size: 100%;

            vertical-align: baseline;

            background: transparent;

          }

          

          @media (max-width: 750px) {



            body, html, {

           

             max-height: 100vh;

           

            }

            

        `}

      </style>

      <a>

      <header className={styles.top_header}>

    </header>



    {/*dust particel*/}

    <div>

      <div className={styles.starsec}></div>

      <div className={styles.starthird}></div>

      <div className={styles.starfourth}></div>

      <div className={styles.starfifth}></div>

    </div>

    {/* END dust particel*/}





    <div className={styles.lamp__wrap}>

      <div className={styles.lamp}>

        <div className={styles.cable}></div>

        <div className={styles.cover}></div>

        <div className={styles.in_cover}>

          <div className={styles.bulb}></div>

        </div>

        <div className={styles.light}></div>

      </div>

    </div>

    {/*dust Lamp*/}

    <section className={styles.error}>

      {/*dust content */}

      <div className={styles.error__content}>

        <div className={[styles.error__message, styles.message].join(' ')}>

          <h1 className={styles.message__title}>Page Not Found</h1>

          <p className={styles.message__text}>We&apos;re sorry, the page you were looking for isn&apos;t found here. The link you followed may either be broken or no longer exists. Please try again, or take a look at our.</p>

        </div>

        <div className={[styles.error__nav, styles.e_nav].join(' ')}>

          <a href="http://portfolio.hei.ninja" target="_self" className={styles.e_nav__link}></a>

        </div>

      </div>

      {/*dust content*/}



    </section>



      </a>

    </>

  )

}

