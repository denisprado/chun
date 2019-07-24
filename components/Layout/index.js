import Navbar from "../Navbar";
import Footer from "../Footer";


const Layout = props => (
  <>
    <div className="layout">
      <Navbar />
      <div className="content">{props.children}</div>
      <Footer />
    </div>
    <style jsx>{`
      div.layout {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 15px;
      }

      div.content {
        margin: 0 16.66%;
        margin:0 calc(100% / 6);
      }
    `}</style>
    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
      }

      html,
      body,
      #__next {
        height: 100%;
      }

      body {
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        background: #373737;
        color: #fff;
        font-family: "Exo 2", sans-serif;
      }

      button {
        cursor: pointer;
      }

      p{
        font-weight:200;
        font-size:22px;
      }

      a {
        text-decoration: none;
        color: blue;
        padding: 0 15px 0 0;
        color: #9c9c9c;
      }

      a:hover {
        color: #8a8a8a;
      }

      a:active: {
        color: #777777;
      }

      h1{
        font-size: 60px;
        font-weight: 100;
      }

      .hero-image {
        border: 10px solid #fff;
      }

      .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
      }

      .image-left{
        flex-direction: row-reverse;
      }
      
      .column {
        display: flex;
        flex-direction: column;
        flex-basis:100%;
        flex: 3;
        margin-right: 15px;
      }

      .column-2 {
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        flex: 5;
        margin-right: 15px;
      }
    `}</style>
  </>
);

export default Layout;

/**
 * Colors


{
  "0": "#ffffff",
  "5": "#fefefe",
  "10": "#fdfdfd",
  "20": "#fbfbfb",
  "30": "#f8f8f8",
  "40": "#f4f4f4",
  "50": "#f0f0f0",
  "60": "#eaeaea",
  "70": "#e3e3e3",
  "80": "#dbdbdb",
  "90": "#d2d2d2",
  "100": "#c7c7c7",
  "110": "#bababa",
  "120": "#acacac",
  "130": "#9c9c9c",
  "140": "#8a8a8a",
  "150": "#777777",
  "160": "#626262",
  "170": "#4d4d4d",
  "180": "#373737",
  "190": "#212121"
}
 */
