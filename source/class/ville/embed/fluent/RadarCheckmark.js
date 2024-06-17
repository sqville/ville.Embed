/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.RadarCheckmark",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m14.5 3.38-.72.72A7 7 0 0 0 3 9.6c-.36.18-.7.4-1 .65a8 8 0 0 1 12.5-6.87ZM9.75 18c.25-.31.47-.65.66-1.01a6.97 6.97 0 0 0 4.54-2.04.5.5 0 0 1 .7.7A7.98 7.98 0 0 1 9.76 18ZM11 14.5l-.01.4a4.98 4.98 0 0 0 2.55-1.36.5.5 0 1 0-.71-.71c-.54.53-1.18.88-1.86 1.05.02.2.03.41.03.62ZM5.5 9l.62.03a3.98 3.98 0 0 1 5.44-2.71l.75-.75A5 5 0 0 0 5.1 9L5.5 9Zm3.54 1.3c.24.2.46.42.67.66a1 1 0 0 0 1.26-1.22l4.88-4.89a.5.5 0 0 0-.7-.7l-4.9 4.88a1 1 0 0 0-1.2 1.26ZM17 13.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM16.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1.5 4.25a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-.5-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-2.5 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-.5-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM10 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0L4.5 15.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z",
    FILLED : "m14.28 3.24-1.09 1.1a6.5 6.5 0 0 0-9.66 5.02 5.5 5.5 0 0 0-1.53.9 8 8 0 0 1 12.28-7.01ZM9.75 18c.37-.46.67-.97.89-1.53a6.47 6.47 0 0 0 3.96-1.87.75.75 0 0 1 1.06 1.06A7.98 7.98 0 0 1 9.75 18ZM11 14.5c0 .17 0 .34-.02.5a5.08 5.08 0 0 0 2.63-1.4.75.75 0 1 0-1.06-1.05c-.47.47-1.04.78-1.64.93.06.33.09.67.09 1.02ZM5.5 9c.35 0 .69.03 1.02.1a3.58 3.58 0 0 1 4.47-2.56l1.16-1.17A5.1 5.1 0 0 0 5 9.02L5.5 9Zm3 .9c.64.41 1.19.96 1.6 1.6a1.5 1.5 0 0 0 1.35-1.89l4.33-4.33a.75.75 0 0 0-1.06-1.06l-4.33 4.33A1.5 1.5 0 0 0 8.5 9.9Zm8.75 3.35a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 7.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm1.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75-1.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 11.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75-1.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-4.25 5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15-1.85a.5.5 0 0 0-.7 0L4.5 15.29l-.65-.64a.5.5 0 0 0-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 0 0 0-.7Z"
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