/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ClosedCaption",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.4 7.24c.82-.41 1.8-.24 2.45.4a.5.5 0 0 1-.7.71 1.12 1.12 0 0 0-1.3-.22C6.44 8.34 6 8.9 6 10s.44 1.66.85 1.87c.43.21.95.13 1.3-.22a.5.5 0 0 1 .7.7c-.65.65-1.63.82-2.45.41C5.56 12.34 5 11.39 5 10c0-1.39.56-2.34 1.4-2.76Zm7.95.4a2.12 2.12 0 0 0-2.45-.4c-.84.42-1.4 1.37-1.4 2.76 0 1.39.56 2.34 1.4 2.76.82.41 1.8.24 2.45-.4a.5.5 0 0 0-.7-.71c-.35.35-.87.43-1.3.22-.41-.21-.85-.76-.85-1.87s.44-1.66.85-1.87c.43-.21.95-.13 1.3.22a.5.5 0 0 0 .7-.7ZM2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7Zm3-2a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5Z",
    FILLED : "M5 4a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H5Zm1.4 3.24c.82-.41 1.8-.24 2.45.4a.5.5 0 0 1-.7.71 1.12 1.12 0 0 0-1.3-.22C6.44 8.34 6 8.9 6 10s.44 1.66.85 1.87c.43.21.95.13 1.3-.22a.5.5 0 1 1 .7.7c-.65.65-1.63.82-2.45.41C5.56 12.34 5 11.39 5 10c0-1.39.56-2.34 1.4-2.76Zm7.95.4a.5.5 0 0 1-.7.71 1.12 1.12 0 0 0-1.3-.22c-.41.21-.85.76-.85 1.87s.44 1.66.85 1.87c.43.21.95.13 1.3-.22a.5.5 0 0 1 .7.7c-.65.65-1.63.82-2.45.41-.84-.42-1.4-1.37-1.4-2.76 0-1.39.56-2.34 1.4-2.76.82-.41 1.8-.24 2.45.4Z"
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