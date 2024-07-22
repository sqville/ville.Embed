/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.mdi.CalendarQuestion",
{
  extend : ville.embed.mdi.AbstractBundle,

  statics :
  {
    FILLED : "M6,1V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H18V1H16V3H8V1H6M5,8H19V19H5V8M12.19,9C11.32,9 10.62,9.2 10.08,9.59C9.56,10 9.3,10.57 9.31,11.36L9.32,11.39H11.25C11.26,11.09 11.35,10.86 11.53,10.7C11.71,10.55 11.93,10.47 12.19,10.47C12.5,10.47 12.76,10.57 12.94,10.75C13.12,10.94 13.2,11.2 13.2,11.5C13.2,11.82 13.13,12.09 12.97,12.32C12.83,12.55 12.62,12.75 12.36,12.91C11.85,13.25 11.5,13.55 11.31,13.82C11.11,14.08 11,14.5 11,15H13C13,14.69 13.04,14.44 13.13,14.26C13.22,14.08 13.39,13.9 13.64,13.74C14.09,13.5 14.46,13.21 14.75,12.81C15.04,12.41 15.19,12 15.19,11.5C15.19,10.74 14.92,10.13 14.38,9.68C13.85,9.23 13.12,9 12.19,9M11,16V18H13V16H11Z",
    OUTLINED : "M11.95 10C11.21 10 10.61 10.18 10.15 10.5C9.71 10.89 9.5 11.4 9.5 12.1L9.5 12.12H11.15C11.16 11.86 11.24 11.65 11.39 11.5C11.54 11.38 11.73 11.31 11.95 11.31C12.21 11.31 12.43 11.4 12.59 11.56C12.74 11.73 12.81 11.96 12.81 12.22C12.81 12.5 12.75 12.75 12.61 12.95C12.5 13.16 12.31 13.33 12.09 13.5C11.66 13.78 11.36 14.05 11.2 14.29C11.03 14.5 10.94 14.89 10.94 15.33H12.64C12.64 15.06 12.67 14.84 12.75 14.68C12.83 14.5 12.97 14.36 13.18 14.21C13.57 14 13.88 13.74 14.13 13.39C14.37 13.03 14.5 12.67 14.5 12.22C14.5 11.55 14.27 11 13.81 10.61C13.36 10.2 12.74 10 11.95 10M10.94 16.22V18H12.64V16.22H10.94M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M19 5V7H5V5H19M5 19V9H19V19H5Z"
  }
});