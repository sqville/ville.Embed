/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TargetAdd",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Zm-5.1-1c.41-.64.96-1.19 1.6-1.6a1.5 1.5 0 1 0-1.6 1.6Zm-.87 2.38a4 4 0 1 1 4.85-4.85 5.56 5.56 0 0 1 1.02-.02 5 5 0 1 0-5.89 5.9 5.58 5.58 0 0 1 .02-1.03Zm.56 3.1A7 7 0 1 1 17 9.6c.36.19.7.4 1 .66L18 10a8 8 0 1 0-7.75 8 5.5 5.5 0 0 1-.66-1.01Z",
    FILLED : "M3.5 10a6.5 6.5 0 0 0 5.86 6.47c.22.55.52 1.07.9 1.52H10a8 8 0 1 1 7.99-7.74 5.5 5.5 0 0 0-1.53-.89A6.5 6.5 0 0 0 3.5 10Zm5.61 3.39a3.5 3.5 0 1 1 4.27-4.28 5.52 5.52 0 0 1 1.52-.1 5 5 0 1 0-5.89 5.9 5.58 5.58 0 0 1 .1-1.52Zm.78-1.9c.42-.63.97-1.18 1.6-1.6a1.5 1.5 0 1 0-1.6 1.6ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5c0-.28.22-.5.5-.5Z"
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