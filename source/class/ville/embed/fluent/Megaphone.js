/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Megaphone",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M18 4.8c0-.98-.93-1.7-1.89-1.45l-13 3.47A1.5 1.5 0 0 0 2 8.27v2.5c0 .65.41 1.23 1.03 1.43l1.97.66v.89a3.25 3.25 0 0 0 6.27 1.2l4.76 1.59A1.5 1.5 0 0 0 18 15.1V4.81Zm-7.68 9.83A2.25 2.25 0 0 1 6 13.75v-.56l4.32 1.44Zm6.05-10.31a.5.5 0 0 1 .63.48v10.31a.5.5 0 0 1-.66.48l-13-4.34a.5.5 0 0 1-.34-.47V8.27a.5.5 0 0 1 .37-.48l13-3.47Z",
    FILLED : "M16.11 3.35A1.5 1.5 0 0 1 18 4.8v10.31c0 1.03-1 1.75-1.97 1.43l-4.76-1.59A3.25 3.25 0 0 1 5 13.75v-.89l-1.97-.66A1.5 1.5 0 0 1 2 10.78V8.27c0-.68.46-1.28 1.11-1.45l13-3.47ZM6 13.2v.56a2.25 2.25 0 0 0 4.32.88L6 13.2Z"
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