/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CommentMultipleCheckmark",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M14.39 4.11A3.5 3.5 0 0 1 17 7.5v2.1c.36.18.7.4 1 .66V7.5A4.5 4.5 0 0 0 13.5 3h-7c-.82 0-1.54.4-2 1h9a3.54 3.54 0 0 1 .89.11ZM16 7.5v1.7c-.32-.08-.66-.15-1-.18V7.5c0-.83-.67-1.5-1.5-1.5h-9C3.67 6 3 6.67 3 7.5v6c0 .83.67 1.5 1.5 1.5H6v2l2.73-2h.3c.02.34.09.68.18 1h-.15l-2.47 1.8A1 1 0 0 1 5 17v-1h-.5A2.5 2.5 0 0 1 2 13.5v-6A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5Zm3 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    FILLED : "M17 7.5A3.5 3.5 0 0 0 13.5 4h-9c.46-.6 1.18-1 2-1h7A4.5 4.5 0 0 1 18 7.5v2.76c-.3-.26-.64-.48-1-.66V7.5ZM9.06 16h.15A5.5 5.5 0 0 1 16 9.2V7.5A2.5 2.5 0 0 0 13.5 5h-9A2.5 2.5 0 0 0 2 7.5v6A2.5 2.5 0 0 0 4.5 16H5v1a1 1 0 0 0 1.59.8L9.06 16ZM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0l-2.65 2.64-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"
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