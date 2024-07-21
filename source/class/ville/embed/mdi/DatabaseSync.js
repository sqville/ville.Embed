/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.mdi.DatabaseSync",
{
  extend : ville.embed.mdi.AbstractBundle,

  statics :
  {
    FILLED : "M19,12V13.5A4,4 0 0,1 23,17.5C23,18.32 22.75,19.08 22.33,19.71L21.24,18.62C21.41,18.28 21.5,17.9 21.5,17.5A2.5,2.5 0 0,0 19,15V16.5L16.75,14.25L19,12M19,23V21.5A4,4 0 0,1 15,17.5C15,16.68 15.25,15.92 15.67,15.29L16.76,16.38C16.59,16.72 16.5,17.1 16.5,17.5A2.5,2.5 0 0,0 19,20V18.5L21.25,20.75L19,23M12,3C16.42,3 20,4.79 20,7C20,9.21 16.42,11 12,11C7.58,11 4,9.21 4,7C4,4.79 7.58,3 12,3M4,9C4,11.21 7.58,13 12,13C13.11,13 14.17,12.89 15.14,12.68C14.19,13.54 13.5,14.67 13.18,15.96L12,16C7.58,16 4,14.21 4,12V9M20,9V11H19.5L18.9,11.03C19.6,10.43 20,9.74 20,9M4,14C4,16.21 7.58,18 12,18L13,17.97C13.09,19.03 13.42,20 13.95,20.88L12,21C7.58,21 4,19.21 4,17V14Z",
    OUTLINED : "M12 16C12.41 16 12.81 15.97 13.21 15.94C13.4 15.18 13.72 14.46 14.16 13.83C13.47 13.94 12.74 14 12 14C9.58 14 7.3 13.4 6 12.45V9.64C7.47 10.47 9.61 11 12 11S16.53 10.47 18 9.64V11.19C18.5 11.07 19 11 19.55 11C19.7 11 19.85 11 20 11.03V7C20 4.79 16.42 3 12 3S4 4.79 4 7V17C4 19.21 7.59 21 12 21C12.66 21 13.31 20.96 13.92 20.88C13.57 20.29 13.31 19.64 13.16 18.94C12.79 19 12.41 19 12 19C8.13 19 6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16M12 5C15.87 5 18 6.5 18 7S15.87 9 12 9 6 7.5 6 7 8.13 5 12 5M23 17.5C23 18.32 22.75 19.08 22.33 19.71L21.24 18.62C21.41 18.28 21.5 17.9 21.5 17.5C21.5 16.12 20.38 15 19 15V16.5L16.75 14.25L19 12V13.5C21.21 13.5 23 15.29 23 17.5M19 18.5L21.25 20.75L19 23V21.5C16.79 21.5 15 19.71 15 17.5C15 16.68 15.25 15.92 15.67 15.29L16.76 16.38C16.59 16.72 16.5 17.1 16.5 17.5C16.5 18.88 17.62 20 19 20V18.5Z"
  }
});