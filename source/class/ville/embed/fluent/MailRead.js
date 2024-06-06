/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MailRead",
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

   var pathdregular = "M9.74 2.07a.5.5 0 0 1 .52 0l6.77 4.06A2 2 0 0 1 18 7.85v6.65a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.85a2 2 0 0 1 .97-1.72l6.77-4.06ZM10 3.08 3.49 7 3.47 7 10 10.92 16.53 7h-.02L10 3.07Zm7 4.8-6.74 4.05a.5.5 0 0 1-.52 0L3 7.88v6.62c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V7.88Z";
   var pathdfilled = "M10.26 1.07a.5.5 0 0 0-.52 0L2.97 5.13a2 2 0 0 0-.4.32L10 9.92l7.43-4.46a2 2 0 0 0-.4-.33l-6.77-4.06Zm7.67 5.26-7.67 4.6a.5.5 0 0 1-.52 0l-7.67-4.6a2 2 0 0 0-.07.52v6.65A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5V6.85a2 2 0 0 0-.07-.52Z";
   
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