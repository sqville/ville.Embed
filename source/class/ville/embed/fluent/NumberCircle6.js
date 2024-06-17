/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.NumberCircle6",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-8 7a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-.5a2 2 0 1 0 0 4c1.2 0 2-.88 2-2s-.8-2-2-2Zm0 5a3.2 3.2 0 0 1-2.43-1.04C6.89 12.71 6.5 11.58 6.5 10c0-1.17.26-2.28.84-3.11A3.12 3.12 0 0 1 10 5.5c1.62 0 2.42 1.1 2.68 1.56a.5.5 0 0 1-.87.5A2.02 2.02 0 0 0 10 6.5c-.83 0-1.43.36-1.84.96a4.4 4.4 0 0 0-.66 2.38A3 3 0 0 1 10 8.5c1.8 0 3 1.36 3 3s-1.2 3-3 3Z",
    FILLED : "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 7.5c1.2 0 2 .88 2 2s-.8 2-2 2a2 2 0 1 1 0-4Zm0 5a3.2 3.2 0 0 1-2.43-1.04C6.89 12.71 6.5 11.58 6.5 10c0-1.17.26-2.28.84-3.11A3.12 3.12 0 0 1 10 5.5c1.62 0 2.42 1.1 2.68 1.56a.5.5 0 0 1-.87.5A2.02 2.02 0 0 0 10 6.5c-.83 0-1.43.36-1.84.96a4.4 4.4 0 0 0-.66 2.38A3 3 0 0 1 10 8.5c1.8 0 3 1.36 3 3s-1.2 3-3 3Z"
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