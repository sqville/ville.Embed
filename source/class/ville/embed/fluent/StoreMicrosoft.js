/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.StoreMicrosoft",
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

   var pathdregular = "M9.5 7v3h-3V7h3Zm0 7v-3h-3v3h3Zm4-7v3h-3V7h3Zm0 7v-3h-3v3h3ZM7 4V2.5C7 1.67 7.67 1 8.5 1h3c.83 0 1.5.67 1.5 1.5V4h4.5c.28 0 .5.22.5.5v10a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-10c0-.28.22-.5.5-.5H7Zm1-1.5V4h4V2.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Zm-5 12c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V5H3v9.5Z";
   var pathdfilled = "M7 2.5V4H2.5a.5.5 0 0 0-.5.5v10A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-10a.5.5 0 0 0-.5-.5H13V2.5c0-.83-.67-1.5-1.5-1.5h-3C7.67 1 7 1.67 7 2.5ZM8.5 2h3c.28 0 .5.22.5.5V4H8V2.5c0-.28.22-.5.5-.5Zm-2 8V7h3v3h-3Zm0 4v-3h3v3h-3Zm7-4h-3V7h3v3Zm-3 4v-3h3v3h-3Z";
   
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