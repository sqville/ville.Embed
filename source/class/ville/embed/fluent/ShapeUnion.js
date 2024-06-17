/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShapeUnion",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.5 2A2.5 2.5 0 0 0 2 4.5v6A2.5 2.5 0 0 0 4.3 13H7v2.5A2.5 2.5 0 0 0 9.5 18h6.22a2.5 2.5 0 0 0 2.27-2.28v-.01l.01-.21v-6A2.5 2.5 0 0 0 15.5 7H13V4.5a2.52 2.52 0 0 0-.5-1.5 2.5 2.5 0 0 0-2-1h-6Zm6.65 1.15-8 8A1.5 1.5 0 0 1 3 10.5v-.94L9.56 3h.94c.23 0 .45.05.65.15Zm-7.3 8.7 8-8c.1.2.15.42.15.65v.8L5.3 12h-.8a1.5 1.5 0 0 1-.65-.15ZM12 6.71v.79c0 .21.13.4.32.47l-4.35 4.35A.5.5 0 0 0 7.5 12h-.8L12 6.7ZM13.7 8h1.6L8 15.3v-1.6L13.7 8Zm2.7.3c.32.24.53.6.59 1L9.3 17a1.5 1.5 0 0 1-1-.59l8.1-8.1Zm.6 2.4v1.6L12.3 17h-1.6l6.3-6.3Zm0 3v1.6L15.3 17h-1.6l3.3-3.3ZM3 8.15V6.56L6.56 3h1.58L3 8.14Zm0-3V4.5C3 3.67 3.67 3 4.5 3h.64L3 5.14Z",
    FILLED : "M4.5 2A2.5 2.5 0 0 0 2 4.5v6A2.5 2.5 0 0 0 4.5 13H7v2.5A2.5 2.5 0 0 0 9.5 18h6a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 15.5 7H13V4.5A2.5 2.5 0 0 0 10.5 2h-6Z"
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