/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.mdi.CookieAlert",
{
  extend : ville.embed.mdi.AbstractBundle,

  statics :
  {
    FILLED : "M18 10H16V9C16 8 15 8 15 8H13V7C13 6 12 6 12 6H11V4C11 3 10 3 10 3C5 3 1 7 1 12S5 21 10 21 19 17 19 12C19 11.5 19 11 18.9 10.5C18.6 10 18 10 18 10M4.5 13C3.7 13 3 12.3 3 11.5S3.7 10 4.5 10 6 10.7 6 11.5 5.3 13 4.5 13M6 7.5C6 6.7 6.7 6 7.5 6S9 6.7 9 7.5 8.3 9 7.5 9 6 8.3 6 7.5M9 19C8.2 19 7.5 18.3 7.5 17.5S8.2 16 9 16 10.5 16.7 10.5 17.5 9.8 19 9 19M9.5 14C8.7 14 8 13.3 8 12.5S8.7 11 9.5 11 11 11.7 11 12.5 10.3 14 9.5 14M14.5 16C13.7 16 13 15.3 13 14.5S13.7 13 14.5 13C15.3 13 16 13.7 16 14.5S15.3 16 14.5 16M21 15H23V17H21V15M23 7V13H21V7H23Z",
    OUTLINED : "M16 14.5C16 15.3 15.3 16 14.5 16S13 15.3 13 14.5 13.7 13 14.5 13C15.3 13 16 13.7 16 14.5M18.9 10.5C19 11 19 11.5 19 12C19 17 15 21 10 21S1 17 1 12 5 3 10 3C10 3 11 3 11 4V6H12C12 6 13 6 13 7V8H15C15 8 16 8 16 9V10H18C18 10 18.6 10 18.9 10.5M17 12H15.5C14.7 12 14 11.3 14 10.5V10H12.5C11.7 10 11 9.3 11 8.5V8H10.5C9.7 8 9 7.3 9 6.5V5.1C5.9 5.5 3.5 8 3.1 11.1C3.2 10.5 3.8 10 4.5 10C5.3 10 6 10.7 6 11.5S5.3 13 4.5 13C3.7 13 3.1 12.4 3 11.6C3 12.1 3 12.6 3.1 13.1C3.5 15.8 5.6 18 8.2 18.7C7.8 18.4 7.5 18 7.5 17.5C7.5 16.7 8.2 16 9 16S10.5 16.7 10.5 17.5C10.5 18.2 10 18.8 9.3 19C13.5 19.4 17 16.1 17 12M9.5 11C8.7 11 8 11.7 8 12.5S8.7 14 9.5 14 11 13.3 11 12.5 10.3 11 9.5 11M9 7.5C9 6.7 8.3 6 7.5 6S6 6.7 6 7.5 6.7 9 7.5 9 9 8.3 9 7.5M21 17H23V15H21V17M21 7V13H23V7H21Z"
  }
});