/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DesktopFlow",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M14.09 2H4a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h3v2H5.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H13v-2h3a2 2 0 0 0 2-2V7h-1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10v-.5c0-.18.03-.34.09-.5ZM12 17H8v-2h4v2Zm3-14.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V5h-.78a.5.5 0 0 0-.47.34l-.55 1.63A1.5 1.5 0 0 1 11.78 8H11v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V7h.78a.5.5 0 0 0 .47-.34l.55-1.63A1.5 1.5 0 0 1 14.22 4H15V2.5ZM10 7H8v2h2V7Zm6-2h2V3h-2v2Z",
    FILLED : "M14 2.5c0-.18.03-.34.09-.5H3.5C2.67 2 2 2.67 2 3.5v10c0 .83.67 1.5 1.5 1.5H7v2H5.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H13v-2h3.5c.83 0 1.5-.67 1.5-1.5V7h-2.5a1.5 1.5 0 0 1-1.1-.47l-.25.76A2.5 2.5 0 0 1 12 9v.51c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 0 1 6 9.5v-3C6 5.67 6.67 5 7.5 5h3c.43 0 .82.18 1.1.47l.25-.76A2.5 2.5 0 0 1 14 3V2.5ZM12 15v2H8v-2h4Zm3.5-13a.5.5 0 0 0-.5.5V4h-.78a1.5 1.5 0 0 0-1.42 1.03l-.55 1.63a.5.5 0 0 1-.47.34H11v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5V8h.78a1.5 1.5 0 0 0 1.42-1.03l.55-1.63a.5.5 0 0 1 .47-.34H15v.5c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Z"
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