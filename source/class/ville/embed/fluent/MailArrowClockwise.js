/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MailArrowClockwise",
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

   var pathdregular = "M18 1a.5.5 0 0 0-1 0v.76a4.5 4.5 0 1 0 2 3.74.5.5 0 0 0-1 0 3.5 3.5 0 1 1-1.7-3h-.8a.5.5 0 0 0 0 1h2A.5.5 0 0 0 18 3V1Zm-1 9.4v4.1c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5V7.96l6.75 3.97.08.04c.14.05.3.04.42-.04l2.23-1.31a5.49 5.49 0 0 1-1.04-.55l-1.44.85L3 6.8v-.3C3 5.67 3.67 5 4.5 5h4.52c.03-.34.1-.68.19-1H4.5A2.5 2.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5V9.74c-.3.26-.64.48-1 .66Z";
   var pathdfilled = "M18 1a.5.5 0 0 0-1 0v.76a4.5 4.5 0 1 0 2 3.74.5.5 0 0 0-1 0 3.5 3.5 0 1 1-1.7-3h-.8a.5.5 0 0 0 0 1h2A.5.5 0 0 0 18 3V1ZM9 5.5c0 1.9.97 3.59 2.44 4.57l-1.44.85-7.98-4.7A2.5 2.5 0 0 1 4.5 4h4.7c-.13.48-.2.98-.2 1.5Zm9 9V9.74a5.48 5.48 0 0 1-5.52.88l-2.23 1.31a.5.5 0 0 1-.5 0L2 7.37v7.13A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5Z";
   
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