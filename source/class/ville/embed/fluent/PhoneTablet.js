/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PhoneTablet",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
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

   var pathdregular = "M5.84 4a.83.83 0 0 0-.84.8V6H4V4.8C4 3.8 4.84 3 5.84 3h10.32c1 0 1.84.8 1.84 1.8v7.4c0 1-.84 1.8-1.84 1.8H10v-1h6.16c.48 0 .84-.37.84-.8V4.8c0-.43-.36-.8-.84-.8H5.84ZM10 12h2.5a.5.5 0 0 0 0-1H10v1Zm-5 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1H5ZM2 8.5C2 7.67 2.67 7 3.5 7h4C8.33 7 9 7.67 9 8.5v8c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 2 16.5v-8ZM3.5 8a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-4Z";
   var pathdfilled = "M4 4.8C4 3.8 4.84 3 5.84 3h10.32c1 0 1.84.8 1.84 1.8v7.4c0 1-.84 1.8-1.84 1.8H10v-2h2.5a.5.5 0 0 0 0-1H10V8a2 2 0 0 0-2-2H4V4.8ZM3.5 7C2.67 7 2 7.67 2 8.5v8c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-8C9 7.67 8.33 7 7.5 7h-4Zm1 8.5c0-.28.22-.5.5-.5h1a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});