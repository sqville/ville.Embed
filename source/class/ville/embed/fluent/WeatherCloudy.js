/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WeatherCloudy",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11 7c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 13.24 2.82 2.82 0 0 1 15.13 16H6.87A2.82 2.82 0 0 1 4 13.24a2.82 2.82 0 0 1 2.87-2.77h.06C7.13 8.57 8.53 7 11 7Zm0 1a3.04 3.04 0 0 0-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S5.81 15 6.82 15h8.36c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0 0 11 8ZM8.4 4c1.45 0 2.72.83 3.34 2.04a6.05 6.05 0 0 0-1.28-.02 2.65 2.65 0 0 0-4.7 1.2l-.04.22a1 1 0 0 1-.99.82h-.26c-.81 0-1.47.67-1.47 1.5 0 .57.31 1.06.78 1.31-.22.28-.4.58-.52.9a2.62 2.62 0 0 1 1.2-4.85h.22A3.77 3.77 0 0 1 8.39 4Z",
    FILLED : "M11 7c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0 1 18 13.24 2.82 2.82 0 0 1 15.13 16H6.87A2.82 2.82 0 0 1 4 13.24a2.82 2.82 0 0 1 2.87-2.77h.06C7.13 8.57 8.53 7 11 7ZM8.4 4c1.45 0 2.72.83 3.34 2.04A6.05 6.05 0 0 0 11 6C8.6 6 6.87 7.3 6.25 9.29l-.07.21-.04.19-.17.03a3.73 3.73 0 0 0-2.71 2.26 2.62 2.62 0 0 1 1.2-4.86h.22A3.77 3.77 0 0 1 8.39 4Z"
  }
});