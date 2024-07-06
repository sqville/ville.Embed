/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ImageSparkle",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m5.12.28-.35 1.07a2.2 2.2 0 0 1-1.4 1.4L2.3 3.1h-.02a.42.42 0 0 0 0 .8l1.07.35a2.2 2.2 0 0 1 1.4 1.4l.35 1.07a.42.42 0 0 0 .8 0l.35-1.07a2.2 2.2 0 0 1 1.4-1.4l1.07-.35a.42.42 0 0 0 0-.8l-1.07-.35a2.2 2.2 0 0 1-1.38-1.4L5.92.28a.42.42 0 0 0-.8 0ZM.22 8.21l.76-.25a1.58 1.58 0 0 0 1-1l.25-.76a.3.3 0 0 1 .57 0l.25.77a1.58 1.58 0 0 0 .98 1l.77.24a.3.3 0 0 1 0 .57l-.77.25a1.58 1.58 0 0 0-1 1l-.24.77a.3.3 0 0 1-.58 0l-.24-.77a1.58 1.58 0 0 0-1-1L.2 8.8a.3.3 0 0 1 0-.57h.02ZM3 14v-2.1c.09-.03.17-.08.24-.13.22-.16.38-.37.48-.62l.26-.8.02-.04V14c0 .37.1.72.28 1.02l4.67-4.59a1.5 1.5 0 0 1 2.1 0l4.67 4.59c.18-.3.28-.65.28-1.02V6a2 2 0 0 0-2-2H9.9a1.42 1.42 0 0 0 .01-1H14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm11-6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm1 8.5a2 2 0 0 0 1.01-.27l-4.66-4.58a.5.5 0 0 0-.7 0l-4.66 4.58A2 2 0 0 0 6 16h8Z",
    FILLED : "m5.12.28-.35 1.07a2.2 2.2 0 0 1-1.4 1.4L2.3 3.1h-.02a.42.42 0 0 0 0 .8l1.07.35a2.2 2.2 0 0 1 1.4 1.4l.35 1.07a.42.42 0 0 0 .8 0l.35-1.07a2.2 2.2 0 0 1 1.4-1.4l1.07-.35a.42.42 0 0 0 0-.8l-1.07-.35a2.2 2.2 0 0 1-1.38-1.4L5.92.28a.42.42 0 0 0-.8 0ZM.22 8.21l.76-.25a1.58 1.58 0 0 0 1-1l.25-.76a.3.3 0 0 1 .57 0l.25.77a1.58 1.58 0 0 0 .98 1l.77.24a.3.3 0 0 1 0 .57l-.77.25a1.58 1.58 0 0 0-1 1l-.24.77a.3.3 0 0 1-.58 0l-.24-.77a1.58 1.58 0 0 0-1-1L.2 8.8a.3.3 0 0 1 0-.57h.02Zm3.02 3.56c-.07.05-.15.1-.24.13V14c0 .65.2 1.25.56 1.74l5.39-5.3a1.5 1.5 0 0 1 2.1 0l5.4 5.3c.34-.49.55-1.1.55-1.74V6a3 3 0 0 0-3-3H9.91a1.42 1.42 0 0 1-.17 1.32c-.17.24-.41.43-.71.53l-1.06.35a1.3 1.3 0 0 0-.47.29c-.11.11-.2.24-.3.47l-.35 1.1c-.1.24-.25.47-.52.68-.14.1-.3.17-.45.21a1.3 1.3 0 0 1-.77 1.79l-.77.25a.64.64 0 0 0-.22.14.52.52 0 0 0-.14.22l-.26.8c-.1.25-.26.46-.48.62ZM6 17c-.65 0-1.24-.2-1.73-.55l5.38-5.3c.2-.2.5-.2.7 0l5.38 5.3c-.49.35-1.08.55-1.73.55H6Zm6.5-8.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z"
  }
});