/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.mdi.PawOff",
{
  extend : ville.embed.mdi.AbstractBundle,

  statics :
  {
    FILLED : "M2,4.27L3.28,3L21.5,21.22L20.23,22.5L18.23,20.5C18.09,20.6 17.94,20.68 17.79,20.75C16,21.57 13.88,19.87 11.89,19.87C9.9,19.87 7.76,21.64 6,20.75C5,20.26 4.31,18.96 4.44,17.88C4.62,16.39 6.41,15.59 7.47,14.5C8.21,13.77 8.84,12.69 9.55,11.82L2,4.27M8.35,3C9.53,2.83 10.78,4.12 11.14,5.9C11.32,6.75 11.26,7.56 11,8.19L7.03,4.2C7.29,3.55 7.75,3.1 8.35,3M15.5,3C16.69,3.19 17.35,4.77 17,6.54C16.62,8.32 15.37,9.61 14.19,9.43C13,9.25 12.35,7.67 12.72,5.9C13.08,4.12 14.33,2.83 15.5,3M3,7.6C4.14,7.11 5.69,8 6.5,9.55C7.26,11.13 7,12.79 5.87,13.28C4.74,13.77 3.2,12.89 2.41,11.32C1.62,9.75 1.9,8.08 3,7.6M21,7.6C22.1,8.08 22.38,9.75 21.59,11.32C20.8,12.89 19.26,13.77 18.13,13.28C17,12.79 16.74,11.13 17.5,9.55C18.31,8 19.86,7.11 21,7.6Z",
    OUTLINED : "M22.83 8.25C22.56 7.5 22.05 6.96 21.39 6.68C20.22 6.18 18.8 6.6 17.7 7.66C17.81 7.37 17.91 7.06 18 6.73C18.25 5.38 18 4.03 17.38 3.12C16.95 2.5 16.33 2.11 15.64 2C14.1 1.78 12.57 3.08 11.93 5C11.28 3.05 9.74 1.76 8.19 2C7.5 2.12 6.88 2.53 6.45 3.16C6.44 3.18 6.43 3.2 6.42 3.22L7.91 4.71C7.96 4.54 8 4.4 8.1 4.29C8.22 4.12 8.36 4 8.5 4C9 3.91 9.88 4.69 10.16 6.1C10.23 6.44 10.24 6.75 10.22 7L11.88 8.68C11.89 8.65 11.91 8.62 11.93 8.58C11.97 8.69 12.04 8.78 12.09 8.89L13.43 10.23C13.63 10.32 13.83 10.39 14.04 10.42C14.16 10.44 14.29 10.45 14.41 10.45C15.13 10.45 15.83 10.12 16.43 9.57C16 10.64 15.96 11.73 16.29 12.63C16.56 13.35 17.07 13.91 17.73 14.2C18.07 14.34 18.43 14.41 18.8 14.41C20.18 14.41 21.66 13.4 22.5 11.77C23.08 10.58 23.21 9.3 22.83 8.25M16 6.33C15.72 7.73 14.83 8.5 14.34 8.44C14.28 8.43 14.12 8.41 13.94 8.15C13.69 7.79 13.5 7.07 13.7 6.1C13.97 4.76 14.8 4 15.29 4C15.31 4 15.34 4 15.36 4C15.5 4 15.63 4.11 15.75 4.27C16.07 4.73 16.18 5.54 16 6.33M20.7 10.87C20.12 12 19.08 12.6 18.53 12.36C18.47 12.34 18.28 12.26 18.16 11.93C18 11.43 18.07 10.68 18.39 10C18.9 9.04 19.74 8.47 20.33 8.47C20.43 8.47 20.5 8.5 20.6 8.5H20.6C20.75 8.58 20.87 8.72 20.95 8.94C21.09 9.34 21.1 10.06 20.7 10.87M1.11 3L4.8 6.69C4.06 6.41 3.29 6.39 2.6 6.68C1.94 6.97 1.43 7.53 1.17 8.27C.793 9.31 .919 10.58 1.5 11.77C2.34 13.4 3.82 14.41 5.21 14.41C5.57 14.41 5.93 14.34 6.27 14.2C6.93 13.91 7.44 13.35 7.71 12.63C8 11.79 8 10.77 7.64 9.76C7.83 9.91 8.04 10.03 8.24 10.13L9.73 11.62C8.94 12.5 8.27 13.7 7.47 14.5C6.41 15.59 4.62 16.39 4.44 17.88C4.31 18.96 5 20.26 6 20.75C6.35 20.93 6.72 21 7.1 21C8.61 21 10.3 19.87 11.89 19.87C13.5 19.87 15.18 20.97 16.71 20.97C17.08 20.97 17.44 20.91 17.79 20.75C18 20.65 18.23 20.5 18.43 20.32L20.84 22.73L22.11 21.46L2.39 1.73L1.11 3M11.15 13.04L17 18.9C17 18.91 16.97 18.92 16.96 18.93C16.92 18.95 16.85 18.97 16.71 18.97C16.28 18.97 15.63 18.75 15 18.54C14.08 18.23 13.03 17.87 11.89 17.87C10.75 17.87 9.7 18.24 8.78 18.56C8.15 18.77 7.5 19 7.1 19C6.97 19 6.92 19 6.88 18.95C6.66 18.84 6.4 18.37 6.43 18.12C6.5 17.89 7.23 17.31 7.59 17C8.03 16.68 8.5 16.33 8.89 15.91C9.44 15.36 9.89 14.73 10.33 14.12C10.55 13.8 10.86 13.38 11.15 13.04M5.6 10C5.93 10.68 6 11.43 5.84 11.93C5.71 12.26 5.53 12.34 5.47 12.36C4.92 12.6 3.88 12 3.3 10.87C2.9 10.06 2.91 9.35 3.05 8.94C3.13 8.73 3.25 8.58 3.4 8.5C3.5 8.5 3.57 8.46 3.68 8.46C4.26 8.46 5.1 9.03 5.6 10Z"
  }
});