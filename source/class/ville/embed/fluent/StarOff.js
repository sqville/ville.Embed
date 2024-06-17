/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.StarOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.86 2.15a.5.5 0 1 0-.71.7l4.1 4.1-3.4.49a1 1 0 0 0-.55 1.7l3.13 3.05-.74 4.3a1 1 0 0 0 1.45 1.05L10 15.51l3.86 2.03a1 1 0 0 0 1.45-1.05l-.1-.57 1.94 1.93a.5.5 0 0 0 .7-.7l-15-15ZM13.99 14.7l.34 1.96-3.86-2.03a1 1 0 0 0-.93 0l-3.87 2.03.74-4.3a1 1 0 0 0-.29-.89L3 8.43l4.12-.6L14 14.7Zm-.11-3.23a1 1 0 0 0-.13.16l.88.88-.05-.32 3.12-3.05a1 1 0 0 0-.56-1.7l-4.31-.63L10.9 2.9a1 1 0 0 0-1.8 0L7.76 5.63l.74.75L10 3.34l1.93 3.91c.15.3.43.5.75.55l4.32.63-3.12 3.04Z",
    FILLED : "M2.86 2.15a.5.5 0 1 0-.71.7l4.1 4.1-3.4.49a1 1 0 0 0-.55 1.7l3.13 3.05-.74 4.3a1 1 0 0 0 1.45 1.05L10 15.51l3.86 2.03a1 1 0 0 0 1.45-1.05l-.1-.57 1.94 1.93a.5.5 0 0 0 .7-.7l-15-15Zm11.72 10.04.05.32-6.87-6.88L9.1 2.9a1 1 0 0 1 1.8 0l1.93 3.91 4.31.63a1 1 0 0 1 .56 1.7l-3.12 3.05Z"
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