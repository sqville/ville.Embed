/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DeveloperBoard",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-2 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-.5-8c.28 0 .5.22.5.5V4h1.5V2.5a.5.5 0 0 1 1 0V4H12V2.5a.5.5 0 0 1 1 0V4h.5A2.5 2.5 0 0 1 16 6.5V7h1.5a.5.5 0 0 1 0 1H16v1.5h1.5a.5.5 0 0 1 0 1H16V12h1.5a.5.5 0 0 1 0 1H16v.5a2.5 2.5 0 0 1-2.5 2.5H13v1.5a.5.5 0 0 1-1 0V16h-1.5v1.5a.5.5 0 0 1-1 0V16H8v1.5a.5.5 0 0 1-1 0V16h-.5A2.5 2.5 0 0 1 4 13.5V13H2.5a.5.5 0 0 1 0-1H4v-1.5H2.5a.5.5 0 0 1 0-1H4V8H2.5a.5.5 0 0 1 0-1H4v-.5A2.5 2.5 0 0 1 6.5 4H7V2.5c0-.28.22-.5.5-.5ZM15 6.5c0-.83-.67-1.5-1.5-1.5h-7C5.67 5 5 5.67 5 6.5v7c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-7Z",
    FILLED : "M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 2.5a.5.5 0 0 0-1 0V4h-.5A2.5 2.5 0 0 0 4 6.5V7H2.5a.5.5 0 0 0 0 1H4v1.5H2.5a.5.5 0 0 0 0 1H4V12H2.5a.5.5 0 0 0 0 1H4v.5A2.5 2.5 0 0 0 6.5 16H7v1.5a.5.5 0 0 0 1 0V16h1.5v1.5a.5.5 0 0 0 1 0V16H12v1.5a.5.5 0 0 0 1 0V16h.5a2.5 2.5 0 0 0 2.5-2.5V13h1.5a.5.5 0 0 0 0-1H16v-1.5h1.5a.5.5 0 0 0 0-1H16V8h1.5a.5.5 0 0 0 0-1H16v-.5A2.5 2.5 0 0 0 13.5 4H13V2.5a.5.5 0 0 0-1 0V4h-1.5V2.5a.5.5 0 0 0-1 0V4H8V2.5Zm5 7.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
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