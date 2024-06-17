/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LaptopBriefcase",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v1.5c-.3-.22-.63-.38-1-.45V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4v1H5a2 2 0 0 1-2-2V7Zm-.5 9H9v-1H2.5a.5.5 0 0 0 0 1Zm9.5-5.5v.5h-.5c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5H17v-.5c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5Zm1.5-.5h2c.28 0 .5.22.5.5v.5h-3v-.5c0-.28.22-.5.5-.5Z",
    FILLED : "M4.5 5C3.67 5 3 5.67 3 6.5v6c0 .83.67 1.5 1.5 1.5H9v-1.5a2.5 2.5 0 0 1 2.04-2.46A2.5 2.5 0 0 1 13.5 8h2c.56 0 1.08.19 1.5.5v-2c0-.83-.67-1.5-1.5-1.5h-11Zm-2 10H9v1H2.5a.5.5 0 0 1 0-1Zm9.5-4.5v.5h-.5c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5H17v-.5c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5Zm1.5-.5h2c.28 0 .5.22.5.5v.5h-3v-.5c0-.28.22-.5.5-.5Z"
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