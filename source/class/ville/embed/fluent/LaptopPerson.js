/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LaptopPerson",
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

   var pathdregular = "M3 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v1.4c-.3-.17-.64-.3-1-.36V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h8.26l.01.01a2.5 2.5 0 0 0-1.77.99H5a2 2 0 0 1-2-2V7Zm8 8.5c0-.17.02-.34.05-.5H2.5a.5.5 0 0 0 0 1h8.54a3.3 3.3 0 0 1-.04-.5Zm6.5-4.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 16.75 12 15.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z";
   var pathdfilled = "M4.5 5C3.67 5 3 5.67 3 6.5v6c0 .83.67 1.5 1.5 1.5h7a2.5 2.5 0 0 1 1.77-.99A2.99 2.99 0 0 1 15.5 8c.55 0 1.06.15 1.5.4V6.5c0-.83-.67-1.5-1.5-1.5h-11Zm-2 10h8.55a2.51 2.51 0 0 0-.01 1H2.5a.5.5 0 0 1 0-1Zm15-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 16.75 12 15.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z";
   
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