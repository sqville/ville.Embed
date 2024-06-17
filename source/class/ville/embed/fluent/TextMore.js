/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextMore",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8 2c.2 0 .39.12.46.31l5.1 12.51a2.26 2.26 0 0 0-1.08 0L11.33 12H4.67l-1.7 4.19a.5.5 0 1 1-.93-.38l5.5-13.5A.5.5 0 0 1 8 2Zm5 13.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 1 1 0-2.5Zm0 0ZM5.08 11h5.84L8 3.83 5.08 11Zm5.17 6a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM17 18.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
    FILLED : "M8.25 2c.3 0 .58.18.7.47L14.04 15a2.24 2.24 0 0 0-1.69-.17l-.95-2.34H5.08l-1.64 4.03a.75.75 0 1 1-1.39-.56l5.5-13.5a.75.75 0 0 1 .7-.47ZM13 15.75c.63 0 1.15.46 1.24 1.07l.01.18A1.25 1.25 0 1 1 13 15.75ZM5.7 11h5.1L8.25 4.74 5.7 11Zm4.55 6a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM17 18.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
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