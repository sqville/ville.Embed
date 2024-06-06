/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CloudLink",
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

   var pathdregular = "M14.65 8.25C14.4 5.92 12.82 4 10 4 7.18 4 5.59 5.9 5.35 8.25H5.1A3.34 3.34 0 0 0 2 11.62 3.33 3.33 0 0 0 5.28 15h4.06a3.48 3.48 0 0 1-.3-1H5.28A2.33 2.33 0 0 1 3 11.62a2.33 2.33 0 0 1 2.28-2.37h.07a1 1 0 0 0 1-.9C6.55 6.32 7.89 5 10 5c2.1 0 3.45 1.32 3.65 3.35a1 1 0 0 0 1 .9h.07c.65 0 1.25.29 1.67.75h.11c.42 0 .83.07 1.2.21a3.28 3.28 0 0 0-2.98-1.96h-.07ZM12.5 11a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-3.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z";
   var pathdfilled = "M14.65 8.25C14.4 5.92 12.82 4 10 4 7.18 4 5.59 5.9 5.35 8.25h-.07A3.33 3.33 0 0 0 2 11.62 3.33 3.33 0 0 0 5.28 15h3.76a3.5 3.5 0 0 1 3.46-4h4c.53 0 1.04.12 1.49.33a3.32 3.32 0 0 0-3.27-3.08h-.07ZM12.5 12a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1h-.5Zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5H16Zm-3.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z";
   
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