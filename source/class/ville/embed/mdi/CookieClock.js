/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.mdi.CookieClock",
{
  extend : ville.embed.mdi.AbstractBundle,

  statics :
  {
    FILLED : "M19.97 10.24C19.95 10 19.91 9.74 19.87 9.5C19.6 9 19 9 19 9H17V8C17 7 16 7 16 7H14V6C14 5 13 5 13 5H12V3C12 2 11 2 11 2C6.03 2 2 6.03 2 11C2 15.71 5.62 19.57 10.23 19.96C11.5 21.8 13.61 23 16 23C19.87 23 23 19.87 23 16C23 13.61 21.8 11.5 19.97 10.24M11.64 10.53C10.87 11.15 10.23 11.92 9.78 12.81C9.32 12.55 9 12.06 9 11.5C9 10.67 9.67 10 10.5 10C10.96 10 11.36 10.21 11.64 10.53M5.5 12C4.67 12 4 11.33 4 10.5S4.67 9 5.5 9 7 9.67 7 10.5 6.33 12 5.5 12M7 6.5C7 5.67 7.67 5 8.5 5S10 5.67 10 6.5 9.33 8 8.5 8 7 7.33 7 6.5M8.5 16.5C8.5 16.04 8.71 15.64 9.03 15.36C9 15.57 9 15.79 9 16C9 16.62 9.09 17.22 9.24 17.79C8.8 17.5 8.5 17.05 8.5 16.5M16 21C13.24 21 11 18.76 11 16S13.24 11 16 11 21 13.24 21 16 18.76 21 16 21M16.5 16.25L19.36 17.94L18.61 19.16L15 17V12H16.5V16.25Z",
    OUTLINED : "M8.5 8C7.67 8 7 7.33 7 6.5S7.67 5 8.5 5 10 5.67 10 6.5 9.33 8 8.5 8M16.5 12H15V17L18.61 19.16L19.36 17.94L16.5 16.25V12M23 16C23 19.87 19.87 23 16 23C13.61 23 11.5 21.8 10.23 19.96C5.62 19.57 2 15.71 2 11C2 6.03 6.03 2 11 2C11 2 12 2 12 3V5H13C13 5 14 5 14 6V7H16C16 7 17 7 17 8V9H19C19 9 19.6 9 19.87 9.5C19.91 9.74 19.95 10 19.97 10.24C21.8 11.5 23 13.61 23 16M9.16 17.74C8.76 17.47 8.5 17 8.5 16.5C8.5 16.04 8.71 15.64 9.03 15.36C9.12 14.45 9.38 13.59 9.78 12.81C9.32 12.55 9 12.06 9 11.5C9 10.67 9.67 10 10.5 10C10.96 10 11.36 10.21 11.64 10.53C12.59 9.77 13.74 9.26 15 9.08V9H13.5C12.67 9 12 8.33 12 7.5V7H11.5C10.67 7 10 6.33 10 5.5V4.07C6.91 4.5 4.47 7 4.07 10.08C4.25 9.46 4.82 9 5.5 9C6.33 9 7 9.67 7 10.5S6.33 12 5.5 12C4.71 12 4.07 11.39 4 10.62C4 11.11 4 11.61 4.09 12.12C4.5 14.81 6.54 17.04 9.16 17.74M21 16C21 13.24 18.76 11 16 11S11 13.24 11 16 13.24 21 16 21 21 18.76 21 16Z"
  }
});