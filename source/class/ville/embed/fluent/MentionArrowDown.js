/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MentionArrowDown",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM5.15 7.85A.5.5 0 0 0 5.5 8a.5.5 0 0 0 .35-.15l2-2a.5.5 0 1 0-.7-.7L6 6.29V3.5a.5.5 0 0 0-1 0v2.8L3.85 5.14a.5.5 0 1 0-.7.7l2 2Zm7.85.2A3.2 3.2 0 0 0 10.79 7c-.1.35-.23.68-.4 1L10.5 8c1.58 0 2.5 1.17 2.5 3 0 1.8-.97 3-2.5 3S8 12.8 8 11c0-.22.01-.42.04-.62-.33.17-.68.3-1.04.41V11c0 2.3 1.36 4 3.5 4 1.28 0 2.28-.6 2.88-1.59.48 1.3 1.4 2.09 2.62 2.09 1.86 0 3-1.8 3-4.5a8 8 0 0 0-8.59-7.98c.16.31.29.64.38.98H11a7 7 0 0 1 7 7c0 2.22-.81 3.5-2 3.5s-2-1.28-2-3.5V7.41a.5.5 0 0 0-1 .09v.54ZM3.02 10.4c.31.16.64.29.98.38V11a7 7 0 0 0 9.38 6.58.5.5 0 0 1 .34.94 7.99 7.99 0 0 1-10.7-8.1Z",
    FILLED : "M10 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM5.15 7.85A.5.5 0 0 0 5.5 8a.5.5 0 0 0 .35-.15l2-2a.5.5 0 1 0-.7-.7L6 6.29V3.5a.5.5 0 0 0-1 0v2.8L3.85 5.14a.5.5 0 1 0-.7.7l2 2Zm7.6-.38a3.51 3.51 0 0 0-1.9-.7 5.46 5.46 0 0 1-.6 1.5c.09-.02.17-.02.25-.02 1.42 0 2.25 1.05 2.25 2.75 0 1.67-.87 2.75-2.25 2.75S8.25 12.67 8.25 11c0-.28.02-.53.06-.77-.47.28-1 .5-1.56.63V11c0 2.43 1.46 4.25 3.75 4.25 1.2 0 2.17-.5 2.83-1.32.55 1.14 1.47 1.82 2.67 1.82 2.03 0 3.25-1.92 3.25-4.75a8.25 8.25 0 0 0-8.97-8.22c.26.45.46.95.58 1.47H11A6.75 6.75 0 0 1 17.75 11c0 2.1-.73 3.25-1.75 3.25S14.25 13.1 14.25 11V7.4a.75.75 0 0 0-1.5.07Zm-9.97 2.81c.45.26.95.46 1.47.58V11a6.75 6.75 0 0 0 9.05 6.35.75.75 0 0 1 .5 1.4A8.23 8.23 0 0 1 2.76 11l.03-.72Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});