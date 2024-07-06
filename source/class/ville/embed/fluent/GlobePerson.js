/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.GlobePerson",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11.31 17.9A8 8 0 1 1 18 10.33a3.02 3.02 0 0 0-1.02-.95c-.05-.66-.2-1.3-.43-1.89h-2.73c.1.6.16 1.25.18 1.9-.4.24-.74.56-1 .95a15.93 15.93 0 0 0-.2-2.85H7.21a14.87 14.87 0 0 0 0 5h5.33c.06.36.19.7.36 1H7.42c.15.59.34 1.13.56 1.6C8.59 16.4 9.34 17 10 17c.32 0 .66-.14 1-.44 0 .46.11.91.31 1.33Zm.71-13C11.41 3.6 10.66 3 10 3c-.66 0-1.4.59-2.02 1.9-.22.47-.4 1.01-.56 1.6h5.16a9.25 9.25 0 0 0-.56-1.6ZM6.4 6.5c.17-.74.4-1.42.68-2.01.19-.4.4-.78.64-1.1A7.02 7.02 0 0 0 3.94 6.5h2.45ZM6 10c0-.87.07-1.71.2-2.5H3.45a6.98 6.98 0 0 0 0 5h2.73C6.07 11.71 6 10.87 6 10Zm1.07 5.51c-.27-.59-.5-1.27-.68-2.01H3.94a7.02 7.02 0 0 0 3.77 3.12c-.24-.33-.45-.7-.64-1.1Zm9-9.01a7.02 7.02 0 0 0-3.78-3.12c.24.33.45.7.64 1.1.27.6.5 1.28.68 2.02h2.45ZM17.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    FILLED : "M7.99 4.18c-.28.66-.5 1.45-.67 2.32h5.36c-.17-.87-.4-1.66-.67-2.32-.3-.73-.65-1.3-1-1.66C10.64 2.15 10.3 2 10 2c-.3 0-.65.15-1 .52-.36.37-.71.93-1.01 1.66Zm-.1-1.9c-.31.43-.59.94-.83 1.52-.32.78-.58 1.7-.76 2.7H2.8c1-2.05 2.85-3.6 5.1-4.22Zm4.22 0c.31.43.59.94.83 1.52.32.78.58 1.7.76 2.7h3.5a8.02 8.02 0 0 0-5.09-4.22Zm5.5 5.22h-3.76c.08.61.12 1.25.14 1.9a2.99 2.99 0 0 1 4 .93 8.26 8.26 0 0 0-.39-2.83ZM13 10v.35a2.99 2.99 0 0 0-.46 2.15H7.16a19.44 19.44 0 0 1 0-5h5.68c.1.79.16 1.63.16 2.5Zm-.32 3.5c-.04.24-.1.47-.15.7A2.5 2.5 0 0 0 11 16.5c0 .29.04.58.12.86l-.12.12c-.35.37-.7.52-1 .52-.3 0-.65-.15-1-.52-.36-.37-.71-.93-1.01-1.66-.28-.66-.5-1.45-.67-2.32h5.36ZM7.9 17.72A8.02 8.02 0 0 1 2.8 13.5h3.5c.18 1 .44 1.92.76 2.7.24.58.52 1.1.83 1.52ZM2.4 12.5h3.76a20.52 20.52 0 0 1 0-5H2.4a8 8 0 0 0 0 5ZM17.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z"
  }
});