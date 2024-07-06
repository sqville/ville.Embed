/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonStarburst",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-.5 3h5c.82 0 1.5.67 1.5 1.5 0 1.11-.46 2-1.22 2.61-.74.6-1.73.89-2.78.89a4.43 4.43 0 0 1-2.8-.89A3.25 3.25 0 0 1 6 11.5c0-.83.67-1.5 1.5-1.5Zm3.94-7.07a1.57 1.57 0 0 0-2.88 0 .57.57 0 0 1-.85.23 1.57 1.57 0 0 0-2.49 1.43.57.57 0 0 1-.63.63 1.57 1.57 0 0 0-1.43 2.49c.2.3.1.7-.23.85a1.57 1.57 0 0 0 0 2.88c.33.14.44.56.23.85a1.57 1.57 0 0 0 1.43 2.49c.36-.04.67.27.63.63a1.57 1.57 0 0 0 2.49 1.43c.3-.2.7-.1.85.23a1.57 1.57 0 0 0 2.88 0 .57.57 0 0 1 .85-.23c1.1.8 2.62-.08 2.49-1.43a.57.57 0 0 1 .63-.63 1.57 1.57 0 0 0 1.43-2.49.57.57 0 0 1 .23-.85 1.57 1.57 0 0 0 0-2.88.57.57 0 0 1-.23-.85 1.57 1.57 0 0 0-1.43-2.49.57.57 0 0 1-.63-.63 1.57 1.57 0 0 0-2.49-1.43c-.3.2-.7.1-.85-.23Zm-1.96.4a.57.57 0 0 1 1.04 0c.41.91 1.55 1.22 2.36.64.4-.29.95.03.9.52-.1 1 .74 1.82 1.73 1.73.49-.05.81.5.52.9-.58.81-.27 1.95.63 2.36.45.2.45.84 0 1.04a1.57 1.57 0 0 0-.63 2.36c.29.4-.03.95-.52.9-1-.1-1.82.74-1.73 1.73.05.49-.5.81-.9.52a1.57 1.57 0 0 0-2.36.63.57.57 0 0 1-1.04 0 1.57 1.57 0 0 0-2.36-.63.57.57 0 0 1-.9-.52c.1-1-.74-1.82-1.73-1.73a.57.57 0 0 1-.52-.9c.58-.81.27-1.95-.63-2.36a.57.57 0 0 1 0-1.04c.9-.41 1.2-1.55.63-2.36a.57.57 0 0 1 .52-.9c1 .1 1.82-.74 1.73-1.73-.05-.49.5-.81.9-.52.81.58 1.95.27 2.36-.63Z",
    FILLED : "M8.96 2.67c.4-.9 1.68-.9 2.08 0 .3.66 1.13.89 1.72.46.8-.57 1.9.07 1.8 1.05-.06.72.54 1.32 1.26 1.25.98-.1 1.62 1.01 1.05 1.81-.43.59-.2 1.42.46 1.72.9.4.9 1.68 0 2.08-.66.3-.89 1.13-.46 1.72.57.8-.07 1.9-1.05 1.8a1.15 1.15 0 0 0-1.25 1.26c.1.98-1.01 1.62-1.81 1.05a1.15 1.15 0 0 0-1.72.46c-.4.9-1.68.9-2.08 0a1.15 1.15 0 0 0-1.72-.46c-.8.57-1.9-.07-1.8-1.05a1.15 1.15 0 0 0-1.26-1.25c-.98.1-1.62-1.01-1.05-1.81.43-.59.2-1.42-.46-1.72-.9-.4-.9-1.68 0-2.08.66-.3.89-1.13.46-1.72-.57-.8.07-1.9 1.05-1.8.72.06 1.32-.54 1.25-1.26-.1-.98 1.01-1.62 1.81-1.05.59.43 1.42.2 1.72-.46ZM10 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm2.5 5h-5c-.83 0-1.5.67-1.5 1.5 0 1.11.45 2 1.2 2.61.75.6 1.74.89 2.8.89 1.05 0 2.04-.3 2.78-.89.76-.6 1.22-1.5 1.22-2.61 0-.83-.68-1.5-1.5-1.5Z"
  }
});