/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Classification",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M12.94 3.74c.28-.4.56-.78.8-1a2.5 2.5 0 1 1 3.53 3.53c-.23.23-.6.51-1.01.79a34.33 34.33 0 0 1-2.72 1.7l1.58 1.58a3 3 0 0 1 0 4.25l-1.91 1.9a1 1 0 0 1-1.42 0l-.33-.32-1.4 1.39a1.5 1.5 0 0 1-2.11 0l-5.51-5.5a1.5 1.5 0 0 1 0-2.13l1.4-1.4-.34-.33a1 1 0 0 1 0-1.41l1.91-1.91a3 3 0 0 1 4.24 0l1.59 1.58a75.15 75.15 0 0 1 1.7-2.72Zm-8.4 5.5-1.4 1.4a.5.5 0 0 0 0 .7l5.51 5.51c.2.2.51.2.71 0l1.4-1.4-6.22-6.2ZM12.88 8a62.95 62.95 0 0 0 2.8-1.75c.41-.28.72-.52.88-.68a1.5 1.5 0 1 0-2.12-2.12c-.16.16-.4.47-.68.87a33.34 33.34 0 0 0-1.54 2.44l-.2.37-.05.07.84.84.07-.04Zm-3.93-2.4a2 2 0 0 0-2.83 0L4.2 7.49l8.29 8.3 1.91-1.91a2 2 0 0 0 0-2.83L8.95 5.59Z",
    FILLED : "M13.73 2.73c-.23.23-.51.6-.79 1.01a34.47 34.47 0 0 0-1.7 2.72L9.65 4.88a3 3 0 0 0-4.24 0L3.5 6.79a1 1 0 0 0 0 1.41l.33.34-1.4 1.4a1.5 1.5 0 0 0 0 2.11l5.52 5.51a1.5 1.5 0 0 0 2.12 0l1.4-1.4.32.34a1 1 0 0 0 1.42 0l1.9-1.91a3 3 0 0 0 0-4.25l-1.57-1.58a59.3 59.3 0 0 0 2.72-1.7c.4-.28.78-.56 1-.8a2.5 2.5 0 0 0-3.53-3.53Zm-2.98 12.73-1.39 1.4a.5.5 0 0 1-.7 0l-5.51-5.51a.5.5 0 0 1 0-.71l1.4-1.4 6.2 6.22Zm2.06-7.43-.84-.84.04-.07a58.97 58.97 0 0 1 1.75-2.8c.28-.41.52-.72.68-.88a1.5 1.5 0 1 1 2.12 2.12c-.16.16-.47.4-.87.68a33.4 33.4 0 0 1-2.44 1.54l-.37.2-.07.05Z"
  }
});