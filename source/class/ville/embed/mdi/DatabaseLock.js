/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.mdi.DatabaseLock",
{
  extend : ville.embed.mdi.AbstractBundle,

  statics :
  {
    FILLED : "M11,3C15.42,3 19,4.79 19,7C19,9.21 15.42,11 11,11C6.58,11 3,9.21 3,7C3,4.79 6.58,3 11,3M19,12.03C17.11,12.24 15.57,13.62 15.13,15.43C13.92,15.79 12.5,16 11,16C6.58,16 3,14.21 3,12V9C3,11.21 6.58,13 11,13C15.42,13 19,11.21 19,9V12.03M14,17.71V20.71C13.07,20.9 12.06,21 11,21C6.58,21 3,19.21 3,17V14C3,16.21 6.58,18 11,18C12.06,18 13.07,17.9 14,17.71M19.5,14A2.5,2.5 0 0,1 22,16.5V17A1,1 0 0,1 23,18V22A1,1 0 0,1 22,23H17A1,1 0 0,1 16,22V18A1,1 0 0,1 17,17V16.5A2.5,2.5 0 0,1 19.5,14M19.5,15A1.5,1.5 0 0,0 18,16.5V17H21V16.5A1.5,1.5 0 0,0 19.5,15Z",
    OUTLINED : "M6 12.45V9.64C7.47 10.47 9.61 11 12 11S16.53 10.47 18 9.64V11.05C18.17 11.03 18.33 11 18.5 11C19.03 11 19.53 11.1 20 11.26V7C20 4.79 16.42 3 12 3S4 4.79 4 7V17C4 19.21 7.59 21 12 21C12.34 21 12.67 21 13 20.97V18.95C12.68 19 12.35 19 12 19C8.13 19 6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16C12.41 16 12.81 15.97 13.21 15.94C13.4 15.46 13.68 15.03 14.07 14.7C14.13 14.39 14.23 14.09 14.34 13.8C13.6 13.93 12.81 14 12 14C9.58 14 7.3 13.4 6 12.45M12 5C15.87 5 18 6.5 18 7S15.87 9 12 9 6 7.5 6 7 8.13 5 12 5M21 16V15.5C21 14.12 19.88 13 18.5 13S16 14.12 16 15.5V16C15.45 16 15 16.45 15 17V21C15 21.55 15.45 22 16 22H21C21.55 22 22 21.55 22 21V17C22 16.45 21.55 16 21 16M20 16H17V15.5C17 14.67 17.67 14 18.5 14S20 14.67 20 15.5V16Z"
  }
});