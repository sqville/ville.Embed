/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.mdi.DatabaseRefresh",
{
  extend : ville.embed.mdi.AbstractBundle,

  statics :
  {
    FILLED : "M12 3C16.42 3 20 4.79 20 7C20 9.21 16.42 11 12 11C7.58 11 4 9.21 4 7C4 4.79 7.58 3 12 3M4 9C4 11.21 7.58 13 12 13C13.11 13 14.18 12.89 15.14 12.68C14.19 13.54 13.5 14.67 13.18 15.96L12 16C7.58 16 4 14.21 4 12V9M20 9V11L19.5 11L18.9 11.03C19.6 10.43 20 9.74 20 9M4 14C4 16.21 7.58 18 12 18L13 17.97C13.09 19.03 13.42 20 13.95 20.88L12 21C7.58 21 4 19.21 4 17V14M19 13.5C20.11 13.5 21.11 13.95 21.83 14.67L23 13.5V17.5H19L20.77 15.73C20.32 15.28 19.69 15 19 15C17.62 15 16.5 16.12 16.5 17.5C16.5 18.88 17.62 20 19 20C19.82 20 20.54 19.61 21 19H22.71C22.12 20.47 20.68 21.5 19 21.5C16.79 21.5 15 19.71 15 17.5C15 15.29 16.79 13.5 19 13.5Z",
    OUTLINED : "M6 12.45V9.64C7.47 10.47 9.61 11 12 11S16.53 10.47 18 9.64V12.03C18.17 12 18.33 12 18.5 12C19 12 19.5 12.07 20 12.18V7C20 4.79 16.42 3 12 3S4 4.79 4 7V17C4 19.21 7.59 21 12 21C12.17 21 12.33 21 12.5 21C12.24 20.37 12.09 19.7 12.03 19L12 19C8.13 19 6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16C12.17 16 12.34 16 12.5 16C12.85 15.18 13.34 14.46 13.95 13.86C13.32 13.95 12.67 14 12 14C9.58 14 7.3 13.4 6 12.45M12 5C15.87 5 18 6.5 18 7S15.87 9 12 9 6 7.5 6 7 8.13 5 12 5M18 18.5L19.77 16.73C19.32 16.28 18.69 16 18 16C16.62 16 15.5 17.12 15.5 18.5S16.62 21 18 21C18.82 21 19.54 20.61 20 20H21.71C21.12 21.47 19.68 22.5 18 22.5C15.79 22.5 14 20.71 14 18.5S15.79 14.5 18 14.5C19.11 14.5 20.11 14.95 20.83 15.67L22 14.5V18.5H18Z"
  }
});